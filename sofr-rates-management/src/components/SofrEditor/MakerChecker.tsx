import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MakerChecker: React.FC = () => {
    const [sofrRate, setSofrRate] = useState<number | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newRate, setNewRate] = useState<number | null>(null);
    const [error, setError] = useState<string>('');
    const [isApproved, setIsApproved] = useState<boolean>(false);

    useEffect(() => {
        fetchCurrentSofrRate();
    }, []);

    const fetchCurrentSofrRate = async () => {
        try {
            const response = await axios.get('/api/sofr/current');
            setSofrRate(response.data.rate);
        } catch (error) {
            setError('Failed to fetch current SOFR rate.');
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
        setNewRate(sofrRate);
    };

    const handleSave = async () => {
        if (newRate === null) {
            setError('Please enter a valid rate.');
            return;
        }

        try {
            await axios.post('/api/sofr/update', { rate: newRate });
            setIsApproved(false);
            setIsEditing(false);
            fetchCurrentSofrRate();
        } catch (error) {
            setError('Failed to update SOFR rate.');
        }
    };

    const handleApprove = async () => {
        try {
            await axios.post('/api/sofr/approve', { rate: newRate });
            setIsApproved(true);
            setIsEditing(false);
            fetchCurrentSofrRate();
        } catch (error) {
            setError('Failed to approve SOFR rate.');
        }
    };

    return (
        <div>
            <h2>SOFR Rate Editor</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <p>Current SOFR Rate: {sofrRate !== null ? sofrRate : 'Loading...'}</p>
            {isEditing ? (
                <div>
                    <input
                        type="number"
                        value={newRate !== null ? newRate : ''}
                        onChange={(e) => setNewRate(Number(e.target.value))}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                    <button onClick={handleApprove}>Approve</button>
                </div>
            ) : (
                <button onClick={handleEdit}>Edit Rate</button>
            )}
            {isApproved && <p>Rate has been approved.</p>}
        </div>
    );
};

export default MakerChecker;