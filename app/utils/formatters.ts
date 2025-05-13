/**
 * Formata uma data para exibição no formato "Friday, 20 January"
 */
export const formatDate = (date: Date = new Date()): string => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
};

/**
 * Converte códigos de condição climática em textos legíveis
 */
export const getWeatherCondition = (code: number): string => {
  // Códigos baseados na documentação da Tomorrow.io
  if (code >= 4000 && code < 5000) return 'Cloudy';
  if (code >= 1000 && code < 2000) return 'Sunny';
  if (code >= 2000 && code < 3000) return 'Partly Cloudy';
  if (code >= 5000 && code < 6000) return 'Rain';
  if (code >= 6000 && code < 7000) return 'Snow';
  return 'Unknown';
}; 