import { Dialog, DialogContent, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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
  carrierId: number | null;
  setCarrierId: (carrierId: number | null) => void;
}) => {
  const [openTab, setOpenTab] = useState<keyof typeof tabs>('acceleration');

  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  const data: ChartData<'line', number[], unknown> = {
    labels: labels,
    datasets: [
      {
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

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
        <Tabs value={openTab} onChange={(_, tab) => setOpenTab(tab)} className="mx-16">
          {Object.entries(tabs).map(([key, name]) => (
            <Tab label={name} value={key} key={key} />
          ))}
        </Tabs>
        {openTab === 'acceleration' && <Line data={data} options={options} />}
        {openTab === 'gps' && <Line data={data} options={options} />}
        {openTab === 'humidity' && <Line data={data} options={options} />}
        {openTab === 'temperature' && <Line data={data} options={options} />}
      </DialogContent>
    </Dialog>
  );
};

export default CarrierDataPopup;
