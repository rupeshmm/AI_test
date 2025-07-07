import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RatesTable: React.FC = () => {
    const [rates, setRates] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get('/api/sofr/rates/historical?days=30');
                setRates(response.data);
            } catch (err) {
                setError('Failed to fetch SOFR rates');
            } finally {
                setLoading(false);
            }
        };

        fetchRates();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div>
            <h2>Historical SOFR Rates (Last 30 Days)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>SOFR Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {rates.map((rate) => (
                        <tr key={rate.date}>
                            <td>{rate.date}</td>
                            <td>{rate.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RatesTable;