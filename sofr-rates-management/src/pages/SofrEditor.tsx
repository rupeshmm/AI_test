import React, { useEffect, useState } from 'react';
import { fetchCurrentSofr, updateSofrRate } from '../api/sofrApi';
import MakerChecker from '../components/SofrEditor/MakerChecker';

const SofrEditor: React.FC = () => {
    const [currentSofr, setCurrentSofr] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCurrentSofr = async () => {
            try {
                const data = await fetchCurrentSofr();
                setCurrentSofr(data.rate);
            } catch (err) {
                setError('Failed to fetch current SOFR rate.');
            } finally {
                setLoading(false);
            }
        };

        getCurrentSofr();
    }, []);

    const handleUpdate = async (newRate: number) => {
        try {
            await updateSofrRate(newRate);
            setCurrentSofr(newRate);
            setError(null);
        } catch (err) {
            setError('Failed to update SOFR rate.');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div>
            <h1>Current SOFR Rate</h1>
            <h2>{currentSofr}</h2>
            <MakerChecker currentRate={currentSofr} onUpdate={handleUpdate} />
        </div>
    );
};

export default SofrEditor;