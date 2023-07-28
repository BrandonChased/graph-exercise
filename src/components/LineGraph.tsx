import React from 'react';
import { Line } from 'react-chartjs-2';

type DataItem = {
  [key: string]: number;
};

type GraphData = {
  label: string;
  value: number;
};

type Props = {
  data: DataItem[];
};

const LineGraph: React.FC<Props> = ({ data }) => {
  // Function to handle duplicate col keys
  const handleDuplicateColumns = (data: DataItem[]): GraphData[] => {
    const alteredData: GraphData[] = [];

    // Group data based on col keys
    data.forEach((row) => {
      Object.entries(row).forEach(([columnKey, value]) => {
        if (columnKey !== 'labels') {
          const existingItem = alteredData.find(
            (item) => item.label === columnKey
          );

          if (existingItem) {
            existingItem.value += value;
          } else {
            const newItem: GraphData = {
              label: columnKey,
              value,
            };
            alteredData.push(newItem);
          }
        }
      });
    });

    return alteredData;
  };

  // Format the data for the Line chart
  const formattedData = handleDuplicateColumns(data);

  return (
    <div>
      <h2>Line Graph</h2>
      <Line
        data={{
          labels: formattedData.map((item) => item.label),
          datasets: [
            {
              label: 'Columns',
              data: formattedData.map((item) => item.value),
              borderWidth: 2,
              borderColor: "rgba(75, 192,192,1)",
            },
          ],
        }}
      />
    </div>
  );
};

export default LineGraph;