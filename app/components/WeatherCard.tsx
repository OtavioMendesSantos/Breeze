import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles/colors';

interface WeatherCardProps {
  city: string;
  temperature: number;
  condition: string;
  backgroundColor: string;
  windSpeed?: number;
  humidity?: number;
  visibility?: number;
  onPress: () => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ 
  city, 
  temperature, 
  condition, 
  backgroundColor, 
  windSpeed = 0,
  humidity = 0,
  visibility = 0,
  onPress 
}) => {
  // Formatar a data atual no estilo "Friday, 20 January"
  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
      <Text style={styles.condition}>{condition}</Text>
      <Text style={styles.temperature}>{Math.round(temperature)}°</Text>
      
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Daily Summary</Text>
        <Text style={styles.summaryText}>
          Now it feels like {Math.round(temperature)}°, in fact {Math.round(temperature)}°.
          {condition === 'Sunny' 
            ? 'It feels hot because of the direct sun.'
            : condition === 'Cloudy'
              ? 'It\'s humid now because of the cloud cover.'
              : 'It\'s humid now because of the heavy rain.'
          } Today,
          the temperature is felt in the range from {Math.round(temperature-2)}° to {Math.round(temperature+2)}°.
        </Text>
      </View>
      
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailValue}>{windSpeed}km/h</Text>
          <Text style={styles.detailLabel}>Wind</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailValue}>{humidity}%</Text>
          <Text style={styles.detailLabel}>Humidity</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailValue}>{visibility}km</Text>
          <Text style={styles.detailLabel}>Visibility</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
    margin: 10,
    height: 500,
    width: 300,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: COLORS.black,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  condition: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 5,
  },
  temperature: {
    fontSize: 120,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 20,
  },
  summaryContainer: {
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 5,
  },
  summaryText: {
    fontSize: 14,
    color: COLORS.black,
    lineHeight: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 12,
    padding: 15,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  detailLabel: {
    fontSize: 14,
    color: COLORS.black,
    opacity: 0.8,
  },
});

export default WeatherCard; 