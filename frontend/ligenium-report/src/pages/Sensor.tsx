import { useEffect, useState } from 'react';

import { useCreateCarrierDataEntryMutation } from '@src/api/client';
import { throttle } from 'lodash';

const Sensor = () => {
  const [recording, setRecording] = useState(false);
  const [carrierId, setCarrierId] = useState(8);

  const [{ xAcceleration, yAcceleration, zAcceleration }, setMotion] = useState({
    xAcceleration: 0,
    yAcceleration: 0,
    zAcceleration: 0,
  });

  const [_, createCarrierDataEntry] = useCreateCarrierDataEntryMutation();

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

    setMotion({
      xAcceleration: _xAcceleration,
      yAcceleration: _yAcceleration,
      zAcceleration: _zAcceleration,
    });
  }, 1000 * 0.25);

  const handleMotionEvent = (event: DeviceMotionEvent) => {
    if (!recording || !carrierId) {
      return;
    }

    const _xAcceleration = event?.acceleration?.x || event?.accelerationIncludingGravity?.x;
    const _yAcceleration = event?.acceleration?.y || event?.accelerationIncludingGravity?.y;
    const _zAcceleration = event?.acceleration?.z || event?.accelerationIncludingGravity?.z;

    if (!_xAcceleration || !_yAcceleration || !_zAcceleration) {
      alert('No motion detected. Maybe your browser is blocking the sensor or you do not have such a sensor.');
      setRecording(false);
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
          <p>
            {xAcceleration}:{yAcceleration}:{zAcceleration}
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
