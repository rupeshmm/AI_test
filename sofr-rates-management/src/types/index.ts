export interface User {
    username: string;
    password: string;
}

export interface SofrRate {
    date: string;
    rate: number;
}

export interface HistoricalRatesResponse {
    rates: SofrRate[];
}

export interface AverageSofrResponse {
    average30Days: number;
}

export interface ComparisonChartData {
    dailySofr: number[];
    average30Days: number[];
    average90Days: number[];
}

export interface CurrentSofr {
    currentRate: number;
    approvalStatus: 'pending' | 'approved' | 'rejected';
}

export interface MakerCheckerFlow {
    currentSofr: CurrentSofr;
    editedRate: number;
    approvalDate: string;
}