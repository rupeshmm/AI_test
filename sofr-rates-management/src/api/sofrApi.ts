import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// Function to validate user credentials
export const validateUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { username, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Login failed');
    }
};

// Function to fetch historical SOFR rates for the last 30 days
export const fetchHistoricalRates = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/sofr/historical`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to fetch historical rates');
    }
};

// Function to fetch current SOFR rate
export const fetchCurrentSofr = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/sofr/current`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to fetch current SOFR');
    }
};

// Function to submit approved SOFR rates
export const submitApprovedRates = async (rates) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/sofr/approve`, rates);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to submit approved rates');
    }
};