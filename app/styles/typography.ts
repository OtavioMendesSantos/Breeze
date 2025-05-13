import { Platform } from 'react-native';

export const FONTS = {
  ledger: Platform.OS === 'ios' ? 'Ledger' : 'Ledger-Regular',
  sfCompactDisplay: Platform.OS === 'ios' ? 'SF Compact Display' : 'SFCompactDisplay-Regular',
};

export const FONT_SIZES = {
  small: 12,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 120, // Para os números grandes de temperatura
}; 