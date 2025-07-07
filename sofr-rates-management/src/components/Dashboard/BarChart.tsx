import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BarChart = () => {
    const [averageRates, setAverageRates] = useState<number[]>([]);
    
    useEffect(() => {
        const fetchAverageRates = async () => {
            try {
                const response = await axios.get('/api/sofr/average-rates');
                setAverageRates(response.data);
            } catch (error) {
                console.error('Error fetching average SOFR rates:', error);
            }
        };

        fetchAverageRates();
    }, []);

    const data = {
        labels: Array.from({ length: averageRates.length }, (_, i) => `Day ${i + 1}`),
        datasets: [
            {
                label: '30-Day Average SOFR',
                data: averageRates,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>30-Day Average SOFR</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;