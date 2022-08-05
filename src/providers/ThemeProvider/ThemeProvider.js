import * as React from "react";
import PropTypes from "prop-types";
import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import createCashmereTheme from "../../theme/createCashmereTheme";

const lightTheme = createCashmereTheme();
const darkTheme = createCashmereTheme("Dark", "dark", {
  background: { default: "#333", paper: "#121212" },
  text: "#fff",
});

export const themes = [lightTheme, darkTheme];

const ThemeContext = React.createContext();

export default function ThemeProvider({
  theme,
  onChange,
  children,
  ...extraProps
}) {
  const [state, setState] = React.useState(theme);
  React.useEffect(() => {
    setState(theme);
  }, [theme]);
  const getThemeProviderValue = React.useCallback(
    () => [
      state,
      (nextState) => {
        setState(nextState);
        onChange && onChange(nextState);
      },
    ],
    [state, setState, onChange]
  );
  document.body.style.backgroundColor = state.palette.background.default;
  document.body.style.color = state.palette.text.primary;
  return (
    <ThemeContext.Provider value={getThemeProviderValue()}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={state} {...extraProps}>
          {children}
        </MuiThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  /**
   * A `createCashmereTheme()` generated theme object.
   * Defaults to `light` theme.
   */
  theme: PropTypes.object,
  /**
   * Callback function whenever the theme is changed.
   */
  onChange: PropTypes.func,
  /**
   * The child components you want themed.
   */
  children: PropTypes.any,
};

ThemeProvider.defaultProps = {
  ...MuiThemeProvider.defaultProps,
  theme: lightTheme,
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
