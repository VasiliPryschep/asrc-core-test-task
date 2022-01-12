import axios from 'axios';
import { PixabayDataType } from '../types/types';

const BASE_URL = `https://pixabay.com/api`;
const API_KEY = '13417145-d0c367819415b077de5e950e3';

export const getPixabayData = async (searchText: string): Promise<PixabayDataType> => {
    const res = await axios.get<PixabayDataType>(`${BASE_URL}/?key=${API_KEY}&q=${searchText}&safesearch=true&per_page=50`);
    return res.data;
}