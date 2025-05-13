import axios from 'axios';

const API_KEY = process.env.TOMORROW_API_KEY; 
const BASE_URL = 'https://api.tomorrow.io/v4';

export const getWeatherByCity = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather/realtime`, {
      params: {
        location: city,
        apikey: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados do clima:', error);
    throw error;
  }
};

export const getForecastByCity = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather/forecast`, {
      params: {
        location: city,
        apikey: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar previsão do tempo:', error);
    throw error;
  }
}; 