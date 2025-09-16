import { createContext, useContext } from 'react';

export type Theme = 'light' | 'dark';
export type ThemeContextProps = {
  theme: Theme;
  isDark: boolean;
  setTheme: (t: Theme) => void;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within <ThemeProvider>');
  return context;
};
