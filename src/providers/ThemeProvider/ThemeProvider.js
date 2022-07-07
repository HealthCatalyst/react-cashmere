import * as React from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { themes as cashmereThemes } from '../../theme/theme';

export const themes = cashmereThemes;

export default function GlobalCssPriority({theme = themes[0], children}) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}