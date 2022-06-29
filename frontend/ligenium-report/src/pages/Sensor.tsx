import { useEffect, useRef, useState } from 'react';

import {
  useCreateCarrierDataEntryMutation,
  useCreateCarrierMutation,
  useCreateIncidentMutation,
} from '@src/api/client';
import { round, throttle } from 'lodash';
import { Button, TextField } from '@mui/material';

const Sensor = () => {
  const [recording, setRecording] = useState(false);
  const [carrierId, setCarrierId] = useState(() => 0);

  const [motion, setMotion] = useState<{ xAcceleration: number; yAcceleration: number; zAcceleration: number }>({
    xAcceleration: 0,
    yAcceleration: 0,
    zAcceleration: 0,
  });
  const firstMotion = useRef(true);

  const [, createCarrierDataEntry] = useCreateCarrierDataEntryMutation();
  const [, createCarrier] = useCreateCarrierMutation();
  const [, createIncident] = useCreateIncidentMutation();

  const stopRecording = () => {
    setRecording(false);
    firstMotion.current = true;
  };

  const startRecording = () => {
    setRecording(true);
  };

  const startRecordingWithAutoIncident = () => {
    startRecording();
    setTimeout(async () => {
      await createCarrier({
        carrier_id: carrierId,
        customer: 'Porsche',
        status: 'active',
      });
      await createIncident({
        carrier_id: carrierId,
        assumption: 'Rolle defekt',
      });
    }, 20 * 1000);
  };

  const updateAcc = (_xAcceleration: number, _yAcceleration: number, _zAcceleration: number) => {
    if (firstMotion.current) {
      firstMotion.current = false;
      createCarrierDataEntry({
        carrierId,
        type: 'acceleration',
        dataset: 'x',
        value: `0`,
      });
      createCarrierDataEntry({
        carrierId,
        type: 'acceleration',
        dataset: 'y',
        value: `0`,
      });
      createCarrierDataEntry({
        carrierId,
        type: 'acceleration',
        dataset: 'z',
        value: `0`,
      });
      return;
    }

    createCarrierDataEntry({
      carrierId,
      type: 'acceleration',
      dataset: 'x',
      value: `${_xAcceleration}`,
    });
    createCarrierDataEntry({
      carrierId,
      type: 'acceleration',
      dataset: 'y',
      value: `${_yAcceleration}`,
    });
    createCarrierDataEntry({
      carrierId,
      type: 'acceleration',
      dataset: 'z',
      value: `${_zAcceleration}`,
    });

    setMotion({
      xAcceleration: round(_xAcceleration, 4),
      yAcceleration: round(_yAcceleration, 4),
      zAcceleration: round(_zAcceleration, 4),
    });
  };
  const uploadData = throttle(updateAcc, 1000 * 0.25);

  const handleMotionEvent = (event: DeviceMotionEvent) => {
    if (!recording) {
      return;
    }

    const _xAcceleration = event?.acceleration?.x || event?.accelerationIncludingGravity?.x;
    const _yAcceleration = event?.acceleration?.y || event?.accelerationIncludingGravity?.y;
    const _zAcceleration = event?.acceleration?.z || event?.accelerationIncludingGravity?.z;

    if (
      _xAcceleration === null ||
      _xAcceleration === undefined ||
      _yAcceleration === null ||
      _yAcceleration === undefined ||
      _zAcceleration === null ||
      _zAcceleration === undefined
    ) {
      alert('No motion detected. Maybe your browser is blocking the sensor or you do not have such a sensor.');
      setRecording(false);
      return;
    }

    uploadData(_xAcceleration, _yAcceleration, _zAcceleration);
  };

  useEffect(() => {
    if (recording) window.addEventListener('devicemotion', handleMotionEvent);
    else window.removeEventListener('devicemotion', handleMotionEvent);
    return () => window.removeEventListener('devicemotion', handleMotionEvent);
  }, [recording]);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center p-4">
      {recording ? (
        <>
          <span>We are tracking your acceleration for carrier "{carrierId}" data now!</span>
          <p>{motion.xAcceleration}</p>
          <p>{motion.yAcceleration}</p>
          <p>{motion.zAcceleration}</p>
          <Button onClick={stopRecording}>stop recording</Button>
        </>
      ) : (
        <>
          <Button onClick={() => !!carrierId && startRecording()} sx={{ p: 3, m: 3 }}>
            start recording
          </Button>
          <TextField
            label="Carrier ID"
            type="number"
            placeholder="Carrier Id"
            value={carrierId}
            onChange={(event) => setCarrierId(parseInt(event.target.value))}
          />
          <Button onClick={() => !!carrierId && startRecordingWithAutoIncident()} sx={{ p: 3, m: 3 }}>
            start recording +
          </Button>
        </>
      )}
    </div>
  );
};

export default Sensor;
