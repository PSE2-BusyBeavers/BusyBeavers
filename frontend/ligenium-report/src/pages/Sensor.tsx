import { useEffect, useState } from 'react';

import {
  useCreateCarrierDataEntryMutation,
  useCreateCarrierMutation,
  useCreateIncidentMutation,
} from '@src/api/client';
import { round, throttle } from 'lodash';
import { Button, TextField } from '@mui/material';

const Sensor = () => {
  const [recording, setRecording] = useState(false);
  const [carrierId, setCarrierId] = useState(8);

  const [motionList, setMotionList] = useState<
    { xAcceleration: number; yAcceleration: number; zAcceleration: number }[]
  >([]);

  let xAcceleration,
    yAcceleration,
    zAcceleration = 0;
  if (motionList.length > 0) {
    xAcceleration = motionList[motionList.length - 1].xAcceleration;
    yAcceleration = motionList[motionList.length - 1].yAcceleration;
    zAcceleration = motionList[motionList.length - 1].zAcceleration;
  }
  const [, createCarrierDataEntry] = useCreateCarrierDataEntryMutation();
  const [, createCarrier] = useCreateCarrierMutation();
  const [, createIncident] = useCreateIncidentMutation();

  const stopRecording = () => {
    setMotionList([]);
    setRecording(false);
  };

  const handleStartMotion = () => {
    if (!carrierId) return;
    setRecording(true);

    createCarrier({
      carrier_id: carrierId,
      customer: 'Porsche',
      status: 'active',
    });
  };

  const incidentSpec = () => {
    handleStartMotion();
    setTimeout(
      () =>
        createIncident({
          carrier_id: carrierId,
          assumption: 'Rolle defekt',
        }),
      20000,
    );
  };

  const uploadData = throttle(async (_xAcceleration: number, _yAcceleration: number, _zAcceleration: number) => {
    if (!carrierId) {
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
    await createCarrierDataEntry({
      carrierId,
      type: 'acceleration',
      dataset: 'z',
      value: `${_zAcceleration}`,
    });

    const newList = [
      ...motionList,
      {
        xAcceleration: round(_xAcceleration, 2),
        yAcceleration: round(_yAcceleration, 2),
        zAcceleration: round(_zAcceleration, 2),
      },
    ];

    setMotionList(newList);
  }, 1000 * 0.25);

  const handleMotionEvent = (event: DeviceMotionEvent) => {
    if (!recording || !carrierId) {
      return;
    }

    const _xAcceleration = event?.acceleration?.x || event?.accelerationIncludingGravity?.x;
    const _yAcceleration = event?.acceleration?.y || event?.accelerationIncludingGravity?.y;
    const _zAcceleration = event?.acceleration?.z || event?.accelerationIncludingGravity?.z;

    if (!_xAcceleration || !_yAcceleration || !_zAcceleration) {
      /* alert('No motion detected. Maybe your browser is blocking the sensor or you do not have such a sensor.');
      setRecording(false);*/
      return;
    }
    uploadData(_xAcceleration, _yAcceleration, _zAcceleration);
  };

  useEffect(() => {
    if (recording) {
      window.addEventListener('devicemotion', handleMotionEvent);
    } else {
      window.removeEventListener('devicemotion', handleMotionEvent);
    }

    return () => window.removeEventListener('devicemotion', handleMotionEvent);
  }, [recording]);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center p-4">
      {recording ? (
        <>
          <span>We are tracking your acceleration for carrier "{carrierId}" data now!</span>
          <p>{xAcceleration}</p>
          <p>{yAcceleration}</p>
          <p>{zAcceleration}</p>
          <Button onClick={stopRecording}>stop recording</Button>
        </>
      ) : (
        <>
          <Button onClick={handleStartMotion} sx={{ p: 3, m: 3 }}>
            start recording
          </Button>
          <TextField
            label="Carrier ID"
            type="number"
            placeholder="Carrier Id"
            value={carrierId}
            onChange={(event) => setCarrierId(event.target.value ? parseInt(event.target.value) : 0)}
          />
          <Button onClick={incidentSpec} sx={{ p: 3, m: 3 }}>
            start recording I
          </Button>
        </>
      )}
    </div>
  );
};

export default Sensor;
