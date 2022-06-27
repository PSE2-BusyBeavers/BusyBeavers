import { useEffect, useState } from 'react';

import { useCreateCarrierDataEntryMutation } from '@src/api/client';
import { debounce } from '@mui/material';

const carrierId = 8;

const Sensor = () => {
  const [recording, setRecording] = useState(false);

  const [{ xAcceleration, yAcceleration }, setMotion] = useState({
    xAcceleration: 0,
    yAcceleration: 0,
  });

  const [_, createCarrierDataEntry] = useCreateCarrierDataEntryMutation();

  const uploadData = debounce(() => {
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

  useEffect(() => {
    const handleMotionEvent = (event: any) => {
      if (!recording) {
        return;
      }

      if (
        !event?.accelerationIncludingGravity?.x ||
        !event?.acceleration?.x ||
        !event?.accelerationIncludingGravity?.y ||
        !event?.acceleration?.y
      ) {
        return;
      }

      setMotion({
        xAcceleration: event.accelerationIncludingGravity?.x || event.acceleration?.x,
        yAcceleration: event.accelerationIncludingGravity?.y || event.acceleration?.y,
      });

      uploadData();
    };

    window.addEventListener('devicemotion', handleMotionEvent, true);
    return () => window.removeEventListener('devicemotion', handleMotionEvent);
  }, []);

  return recording ? (
    <>
      <span>We are tracking your acceleration data now!</span>
      <p>
        {xAcceleration}:{yAcceleration}
      </p>
      <button onClick={() => setRecording(false)}>stop recording</button>
    </>
  ) : (
    <button onClick={() => setRecording(true)}>start recording</button>
  );
};

export default Sensor;
