import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

type DataItem = {
    [key: string]: number;
};

type GraphData = {
    label: string;
    value: number;
    color: string;
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

const BarGraph: React.FC<Props> = ({ data }) => {
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
                            color: getRandomColor(),
                        };
                        alteredData.push(newItem);
                    }
                }
            });
        });

        return alteredData;
    };

    // Formatting the data 
    const formattedData = handleDuplicateColumns(data);

    return (
        <div>
            <h2>Bar Graph</h2>
            <Bar 
                height={50}
                data={{
                    labels: formattedData.map((item) => item.label),
                    datasets: [
                        {
                            label: 'Columns',
                            data: formattedData.map((item) => item.value),
                            backgroundColor: formattedData.map((item) => item.color),
                        },
                    ],
                }}

            />
        </div>
    );
};

export default BarGraph;