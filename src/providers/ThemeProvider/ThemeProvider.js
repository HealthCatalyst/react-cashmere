import * as React from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import createCashmereTheme from '../../theme/createCashmereTheme';

const lightTheme = createCashmereTheme();
const darkTheme = createCashmereTheme('Dark', 'dark', {background: {default: "#333", paper: "#121212"}, text: "#fff"});

export const themes = [
  lightTheme,
  darkTheme
];

export default function GlobalCssPriority({theme = themes[0], children}) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}