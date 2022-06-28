import useCarrierDatas from '@src/hooks/useCarrierDatas';
import { ApexOptions } from 'apexcharts';
import dayjs from 'dayjs';
import Chart from 'react-apexcharts';

const AccelerationData = ({ carrierId }: { carrierId: number }) => {
  const [_, rawData] = useCarrierDatas(carrierId, 'acceleration');

  const x = rawData.filter((i) => i.dataset === 'x');
  const y = rawData.filter((i) => i.dataset === 'y');

  const series: ApexAxisChartSeries = [
    {
      name: 'X Beschleunigung',
      data: x.map(({ value, created_at }) => ({ y: parseFloat(value), x: dayjs(created_at).valueOf() })),
    },
    {
      name: 'Y Beschleunigung',
      data: y.map(({ value, created_at }) => ({ y: parseFloat(value), x: dayjs(created_at).valueOf() })),
    },
  ];

  const options: ApexOptions = {
    chart: {
      id: 'chart2',
      type: 'line',
      height: 230,
      toolbar: {
        autoSelected: 'pan',
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    colors: ['#FAA916', '#4BB3FD'],
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      labels: {
        formatter: (val) => val.toFixed(0),
      },
      title: {
        text: 'Beschleunigung in m/s²',
      },
    },
  };

  const optionsLine: ApexOptions = {
    chart: {
      id: 'chart1',
      height: 130,
      type: 'area',
      brush: {
        target: 'chart2',
        enabled: true,
      },
      selection: {
        enabled: true,
        xaxis: {
          min: dayjs().subtract(30, 'minute').valueOf(),
          max: dayjs().valueOf(),
        },
      },
    },
    legend: {
      show: false,
    },
    colors: ['#FAA916', '#4BB3FD'],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      },
    },
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
      labels: {
        formatter: (val) => val.toFixed(0),
      },
    },
  };

  return (
    <div id="wrapper">
      <div id="chart-line2">
        <Chart options={options} series={series} type="line" height={500} />
      </div>
      <div id="chart-line">
        <Chart options={optionsLine} series={series} type="area" height={130} />
      </div>
    </div>
  );
};

export default AccelerationData;
