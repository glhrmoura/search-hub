const colors = {
  white: '#FFFFFF',
  green300: '#2EA043',
  green400: '#238636',
  blue400: '#0D6EFD',
  gray200: '#161B22',
  gray300: '#E6EDF3',
  gray400: '#848D97',
  gray600: '#30363D',
  gray700: '#0D1116',
};

const spacing = {
  xs: 2,
  sm: 4,
  sml: 6,
  md: 8,
  mdl: 12,
  base: 16,
  mlg: 18,
  lg: 24,
  xl: 32,
  xxl: 46,
  xl2: 64,
};

const theme = {
  colors,
  spacing,
};

export type Theme = typeof theme;

export default theme;
