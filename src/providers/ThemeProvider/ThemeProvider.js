import * as React from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import createCashmereTheme from '../../theme/createCashmereTheme';

const lightTheme = createCashmereTheme();
const darkTheme = createCashmereTheme('Dark', 'dark', {background: {default: "#333", paper: "#121212"}, text: "#fff"});

export const themes = [
  lightTheme,
  darkTheme
];

const ThemeContext = React.createContext();

export default function GlobalCssPriority({theme = themes[0], onChange, children}) {
  const [state, setState] = React.useState(theme);
  React.useEffect(() => {
    setState(theme);
  }, [theme]);
  const getThemeProviderValue = React.useCallback(
    () => [
      state, 
      (nextState) => {
        setState(nextState); 
        onChange && onChange(nextState)
      }
    ], 
    [state, setState, onChange]
  );
  document.body.style.backgroundColor = state.palette.background.default;
  document.body.style.color = state.palette.text.primary;
  return (
    <ThemeContext.Provider value={getThemeProviderValue()}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={state}>
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
}



export const useTheme = () => {
  return React.useContext(ThemeContext);
}