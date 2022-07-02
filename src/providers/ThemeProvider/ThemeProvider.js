import * as React from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme, { themes } from '../../theme/theme';

export default function GlobalCssPriority({children}) {
  document.body.style.backgroundColor = theme.palette.background.default;
  document.body.style.color = theme.palette.text.main;
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Box backgroundColor={theme.palette.background.default} color={theme.palette.text.main}>
          {children}
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}