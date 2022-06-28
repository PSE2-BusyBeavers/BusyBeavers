import { useEffect, useState } from 'react';

import { useCreateCarrierDataEntryMutation } from '@src/api/client';
import { debounce } from '@mui/material';

const Sensor = () => {
  const [recording, setRecording] = useState(false);
  const [carrierId, setCarrierId] = useState(0);

  const [{ xAcceleration, yAcceleration }, setMotion] = useState({
    xAcceleration: 0,
    yAcceleration: 0,
  });

  const [_, createCarrierDataEntry] = useCreateCarrierDataEntryMutation();

  const uploadData = debounce(() => {
    if (!carrierId) {
      return;
    }

    createCarrierDataEntry({
      carrierId,
      type: 'acceleration',
      dataset: 'x',
      value: `${yAcceleration}`,
    });
    createCarrierDataEntry({
      carrierId,
      type: 'acceleration',
      dataset: 'y',
      value: `${yAcceleration}`,
    });
  }, 1000);

  const handleMotionEvent = (event: DeviceMotionEvent) => {
    if (!recording || !carrierId) {
      return;
    }

    const _xAcceleration = event?.acceleration?.x || event?.accelerationIncludingGravity?.x;
    const _yAcceleration = event?.acceleration?.y || event?.accelerationIncludingGravity?.y;

    if (!_xAcceleration || !_yAcceleration) {
      alert('No motion detected. Maybe your browser is blocking the sensor or you do not have such a sensor.');
      return;
    }

    setMotion({
      xAcceleration: _xAcceleration,
      yAcceleration: _yAcceleration,
    });

    uploadData();
  };

  useEffect(() => {
    window.addEventListener('devicemotion', handleMotionEvent, true);
    return () => window.removeEventListener('devicemotion', handleMotionEvent);
  }, []);

  return recording ? (
    <>
      <span>We are tracking your acceleration for carrier {carrierId} data now!</span>
      <p>
        {xAcceleration}:{yAcceleration}
      </p>
      <button
        onClick={() => {
          setCarrierId(0);
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
  );
};

export default Sensor;
