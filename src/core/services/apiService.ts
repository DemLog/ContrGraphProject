import { IContribution } from "@core/types/IContribution";
import axios from "axios";

const API_URL = 'https://dpg.gg/test/';

class ApiService {
    getListContributions = async (): Promise<IContribution[]> => {
        try {
            const response = await axios.get<{ [date: string]: number }>(API_URL + 'calendar.json');
            const data = response.data;

            return Object.entries(data).map(([date, score]) => ({
                date: new Date(date),
                score: score as number
            }));
        } catch (error) {
            console.error('Не удалось получить список по причине:', error);
            return [];
        }
    };
}

export const apiService = new ApiService();
