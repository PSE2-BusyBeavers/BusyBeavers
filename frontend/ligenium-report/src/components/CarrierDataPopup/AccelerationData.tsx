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
import useCarrierDatas from '@src/hooks/useCarrierDatas';
import dayjs from 'dayjs';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AccelerationData = ({ carrierId }: { carrierId: number }) => {
  const [_, rawData] = useCarrierDatas(carrierId, 'acceleration');
  const labels = rawData.map(({ created_at }) => dayjs(created_at).toDate());
  const data: ChartData<'line', number[], unknown> = {
    labels: labels,
    datasets: [
      {
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: rawData.filter((i) => i.dataset === 'x').map(({ value }) => parseInt(value)),
      },
      {
        data: rawData.filter((i) => i.dataset === 'y').map(({ value }) => parseInt(value)),
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
