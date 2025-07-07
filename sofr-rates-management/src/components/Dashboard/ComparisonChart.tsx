import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ComparisonChart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/sofr/comparison');
                const data = response.data;

                setChartData({
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Daily SOFR',
                            data: data.dailySOFR,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        },
                        {
                            label: '30-Day Average SOFR',
                            data: data.average30Days,
                            backgroundColor: 'rgba(153, 102, 255, 0.6)',
                        },
                        {
                            label: '90-Day Average SOFR',
                            data: data.average90Days,
                            backgroundColor: 'rgba(255, 159, 64, 0.6)',
                        }
                    ]
                });
            } catch (error) {
                console.error('Error fetching comparison data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>SOFR Rate Comparison</h2>
            <Bar
                data={chartData}
                options={{
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />
        </div>
    );
};

export default ComparisonChart;