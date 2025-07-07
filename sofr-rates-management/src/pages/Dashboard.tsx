import React, { useEffect, useState } from 'react';
import RatesTable from '../components/Dashboard/RatesTable';
import BarChart from '../components/Dashboard/BarChart';
import ComparisonChart from '../components/Dashboard/ComparisonChart';
import { fetchHistoricalRates, fetchAverageSofr } from '../api/sofrApi';

const Dashboard: React.FC = () => {
    const [historicalRates, setHistoricalRates] = useState([]);
    const [averageSofr, setAverageSofr] = useState<number | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const rates = await fetchHistoricalRates();
            const average = await fetchAverageSofr();
            setHistoricalRates(rates);
            setAverageSofr(average);
        };

        loadData();
    }, []);

    return (
        <div className="dashboard">
            <h1>SOFR Rates Dashboard</h1>
            <RatesTable rates={historicalRates} />
            {averageSofr !== null && <BarChart averageSofr={averageSofr} />}
            <ComparisonChart rates={historicalRates} />
        </div>
    );
};

export default Dashboard;