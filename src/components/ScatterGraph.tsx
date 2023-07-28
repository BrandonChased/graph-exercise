import React from 'react';
import { Scatter } from 'react-chartjs-2';

type DataItem = {
  x: number;
  y: number;
};

type GraphData = {
  label: string;
  data: [{
    x: any;
    y: any;
    color: string;
  }];
};

type Props = {
  data: DataItem[];
};

// Helper function to generate random colors
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ScatterGraph: React.FC<Props> = ({ data }) => {
  // Function to handle duplicate col keys

  const handleDuplicateCols = (data: DataItem[]): GraphData[] => {
    const cols: { [key: string]: number } = {};

    data.forEach((row: DataItem) => {
      Object.entries(row).forEach(([columnKey, value]) => {
        if (typeof value === 'number') {
          // const xAxis = parseInt(columnKey.slice(-1), 10);

          if (cols.hasOwnProperty(columnKey)) {
            cols[columnKey] += value;
          } else {
            cols[columnKey] = value;
          }
        }
      });
    });

    const formattedData: GraphData[] = Object.keys(cols).map((columnKey) => {
      const xAxis = parseInt(columnKey.slice(-1), 10);
      const yValue = cols[columnKey];
      return {
        label: columnKey,
        data: [{ x: xAxis, y: yValue, color: getRandomColor() }],
      };
    });

    return formattedData;
  };

  const formattedData = handleDuplicateCols(data);

  const chartData = {
    datasets: formattedData.map((item) => ({
      label: item.label,
      data: item.data,
      backgroundColor: item.data.map((point) => point.color),
    })),
  };

  return (
    <div>
      <h2>Scatter Graph</h2>
      <Scatter height={50} data={chartData} />
    </div>
  );
};

export default ScatterGraph;