import { useState, useEffect } from 'react';
import { getWeatherByCity } from '../services/weatherApi';
import { getWeatherCondition } from '../utils/formatters';
import { COLORS } from '../styles/colors';
import { AxiosError } from 'axios';

// Definindo tipos para melhor manutenção do código
interface City {
  city: string;
  backgroundColor: string;
}

interface WeatherData extends City {
  temperature: number;
  condition: string;
  windSpeed: number;
  humidity: number;
  visibility: number;
}

/**
 * Hook personalizado para buscar e gerenciar dados climáticos
 */
export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Lista de cidades predefinidas para buscar dados
  const cities: City[] = [
    { city: 'Brasília', backgroundColor: COLORS.yellow },
    { city: 'São Paulo', backgroundColor: COLORS.blue },
    { city: 'Rio de Janeiro', backgroundColor: COLORS.pink },
  ];

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const weatherPromises = cities.map(city => 
          getWeatherByCity(city.city)
            .then(data => ({
              ...city,
              temperature: data.data.values.temperature,
              condition: getWeatherCondition(data.data.values.weatherCode),
              windSpeed: data.data.values.windSpeed,
              humidity: data.data.values.humidity,
              visibility: data.data.values.visibility
            }))
        );
        
        const results = await Promise.all(weatherPromises);
        setWeatherData(results);
        setError(null);
      } catch (err) {
        if (err instanceof AxiosError){
          console.error('Axios error fetching weather data:', err.response?.data);
        }
        setError('Failed to load weather data');
        console.error('Error fetching weather data:', err);
        
        // Dados fictícios para fallback
        setWeatherData(cities.map((city, index) => ({
          ...city,
          temperature: [31, 28, 17][index],
          condition: ['Sunny', 'Cloudy', 'Rain'][index],
          windSpeed: [4, 2, 1][index],
          humidity: [48, 62, 78][index],
          visibility: [1.6, 1, 0.8][index]
        })));
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  // Função para atualizar os dados
  const refreshWeatherData = () => {
    setLoading(true);
    // Recrear o efeito para buscar novamente os dados
    useEffect(() => {}, []);
  };

  return { weatherData, loading, error, refreshWeatherData };
}; 