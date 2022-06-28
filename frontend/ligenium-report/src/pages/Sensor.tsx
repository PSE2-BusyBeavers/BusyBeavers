import { useEffect, useState } from 'react';

import { useCreateCarrierDataEntryMutation } from '@src/api/client';
import { throttle } from 'lodash';

const Sensor = () => {
  const [recording, setRecording] = useState(false);
  const [carrierId, setCarrierId] = useState(8);

  const [{ xAcceleration, yAcceleration }, setMotion] = useState({
    xAcceleration: 0,
    yAcceleration: 0,
  });

  const [_, createCarrierDataEntry] = useCreateCarrierDataEntryMutation();

  const uploadData = throttle(async (_xAcceleration: number, _yAcceleration: number) => {
    if (!carrierId) {
      return;
    }

    await createCarrierDataEntry({
      carrierId,
      type: 'acceleration',
      dataset: 'x',
      value: `${_xAcceleration}`,
    });
    await createCarrierDataEntry({
      carrierId,
      type: 'acceleration',
      dataset: 'y',
      value: `${_yAcceleration}`,
    });
  }, 1000 * 0.25);

  const handleMotionEvent = (event: DeviceMotionEvent) => {
    if (!recording || !carrierId) {
      return;
    }

    const _xAcceleration = event?.acceleration?.x || event?.accelerationIncludingGravity?.x;
    const _yAcceleration = event?.acceleration?.y || event?.accelerationIncludingGravity?.y;

    if (!_xAcceleration || !_yAcceleration) {
      alert('No motion detected. Maybe your browser is blocking the sensor or you do not have such a sensor.');
      setRecording(false);
      return;
    }

    setMotion({
      xAcceleration: _xAcceleration,
      yAcceleration: _yAcceleration,
    });

    uploadData(_xAcceleration, _yAcceleration);
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
          <p>
            {xAcceleration}:{yAcceleration}
          </p>
          <button
            onClick={() => {
              // setCarrierId(0);
              setRecording(false);
            }}
          >
            stop recording
          </button>
        </>
      ) : (
        <>
          <button onClick={() => carrierId && setRecording(true)}>start recording</button>
          <span>CarrierID</span>
          <input
            type="text"
            placeholder="Carrier Id"
            value={carrierId}
            onChange={(event) => setCarrierId(event.target.value ? parseInt(event.target.value) : 0)}
          />
        </>
      )}
    </div>
  );
};

export default Sensor;
