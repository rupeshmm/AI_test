import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RateCards: React.FC = () => {
    const [rateCards, setRateCards] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRateCards = async () => {
            try {
                const response = await axios.get('/api/ratecards'); // Adjust the API endpoint as necessary
                setRateCards(response.data);
            } catch (err) {
                setError('Failed to fetch rate cards');
            } finally {
                setLoading(false);
            }
        };

        fetchRateCards();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div>
            <h1>Rate Cards</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Rate</th>
                        <th>Effective Date</th>
                    </tr>
                </thead>
                <tbody>
                    {rateCards.map((card) => (
                        <tr key={card.id}>
                            <td>{card.product}</td>
                            <td>{card.rate}</td>
                            <td>{card.effectiveDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RateCards;