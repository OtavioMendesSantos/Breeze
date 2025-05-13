import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WeatherCard from '../../components/WeatherCard';
import { COLORS } from '../../styles/colors';
import { useWeather } from '../../hooks/useWeather';
import { styles } from './styles';

export default function HomeScreen() {
  const { weatherData, loading, error } = useWeather();

  console.log(weatherData)

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color={COLORS.white} />
        <Text style={styles.loadingText}>Carregando previsões...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Weather App</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {weatherData.map((data, index) => (
          <WeatherCard
            key={index}
            city={data.city}
            temperature={data.temperature}
            condition={data.condition}
            backgroundColor={data.backgroundColor}
            windSpeed={data.windSpeed}
            humidity={data.humidity}
            visibility={data.visibility}
            onPress={() => console.log(`${data.city} pressed`)}
          />
        ))}
      </ScrollView>
    </View>
  );
} 