import { TextStyle } from 'react-native';

export const typography: Record<string, TextStyle> = {
  h1: {
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 40,
    letterSpacing: -0.9,
  },
  h2: {
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: 19,
    fontWeight: '600',
    lineHeight: 26,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 23,
  },
  bodyBold: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  caption: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
  },
  small: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  button: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0,
  },
  amount: {
    fontSize: 38,
    fontWeight: '700',
    lineHeight: 46,
    letterSpacing: -1.3,
  },
};
