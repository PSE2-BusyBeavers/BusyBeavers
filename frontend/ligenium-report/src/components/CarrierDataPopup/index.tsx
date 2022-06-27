import { Dialog, DialogContent, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import AccelerationData from './AccelerationData';

const tabs = {
  acceleration: 'Beschleunigung',
  gps: 'GPS',
  temperature: 'Temperatur',
  humidity: 'Luftfeuchtigkeit',
};

const CarrierDataPopup = ({
  carrierId,
  setCarrierId,
}: {
  carrierId: number;
  setCarrierId: (carrierId: number | null) => void;
}) => {
  const [openTab, setOpenTab] = useState<keyof typeof tabs>('acceleration');

  return (
    <Dialog
      open={carrierId !== null}
      onClose={() => setCarrierId(null)}
      fullWidth={true}
      maxWidth={'lg'}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogContent>
        <div className="flex justify-center mb-4">
          <span className="text-xl">Ladungsträger {carrierId}</span>
        </div>
        <Tabs value={openTab} onChange={(_, tab) => setOpenTab(tab)}>
          {Object.entries(tabs).map(([key, name]) => (
            <Tab label={name} value={key} key={key} />
          ))}
        </Tabs>
        <div className="mt-4">
          {openTab === 'acceleration' && <AccelerationData carrierId={carrierId} />}
          {openTab === 'gps' && <></>}
          {openTab === 'humidity' && <></>}
          {openTab === 'temperature' && <></>}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarrierDataPopup;
