"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface MiniChartProps {
  isUp: boolean;
}

const MiniChart = ({ isUp }: MiniChartProps) => {
  const upData = [10, 170, 40, 85, 10, 95, 60, 110];
  const downData = [110, 10, 95, 50, 85, 140, 70, 30];

  const data = {
    labels: Array(upData.length).fill(''),
    datasets: [
      {
        data: isUp ? upData : downData,
        borderColor: isUp ? '#3A6FF8' : '#FF4D4D',
        borderWidth: 2,
        tension: 0.,
        pointRadius: 0,
        fill: false,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderCapStyle: 'butt', 
        borderJoinStyle: 'miter', 
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: '60px', height: '40px' }}> 
      <Line data={data} options={options} />
    </div>
  );
};

export default MiniChart;