import { Line } from 'react-chartjs-2';
import {
  ChartData,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import useCarrierDatas from '@src/hooks/useCarrierDatas';
import dayjs from 'dayjs';
import { _DeepPartialObject } from 'chart.js/types/utils';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

const AccelerationData = ({ carrierId }: { carrierId: number }) => {
  const [_, rawData] = useCarrierDatas(carrierId, 'acceleration');

  const labels = rawData.map(({ created_at }) => dayjs(created_at).toDate());
  const data: ChartData<'line', number[], unknown> = {
    labels: labels,
    datasets: [
      {
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        label: 'Beschleunigung X-Achse',
        data: rawData.filter((i) => i.dataset === 'x').map(({ value }) => parseFloat(value)),
      },
      {
        backgroundColor: 'rgb(99, 132, 255)',
        borderColor: 'rgb(99, 132, 255)',
        label: 'Beschleunigung Y-Achse',
        data: rawData.filter((i) => i.dataset === 'y').map(({ value }) => parseFloat(value)),
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

  return <Line data={data} options={options} />;
};

export default AccelerationData;
