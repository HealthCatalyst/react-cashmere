import React from "react";
import Icon from "../components/Icon";
import { createTheme, darken, lighten } from "@mui/material/styles";
import cashmereVars from "./scss/cashmere.scss";
import cashmereColors from "./scss/colors.scss";

const themePalette = (colors) => {
  const palette = {};
  Object.keys(colors).forEach((key) => {
    const c = colors[key];
    if (typeof c == "object") {
      palette[key] = c;
    } else {
      palette[key] = {
        main: colors[key],
        light: lighten(colors[key], 0.2),
        dark: darken(colors[key], 0.2),
        contrastText: key !== "white" ? colors["white"] : colors["black"],
      };
    }
  });
  return palette;
};

const themeTypography = (theme = {}) => ({
  fontFamily: cashmereVars["font-family"],
  fontSize: parseInt(cashmereVars["font-size"], 10),
  color: "inherit",
  h6: {ß
    fontSize: undefined,
    fontWeight: undefined,
    lineHeight: undefined,
    textRendering: undefined,
    color: "inherit",
  },
  h5: {
    fontSize: undefined,
    fontWeight: undefined,
    lineHeight: undefined,
    textRendering: undefined,
    color: "inherit",
  },
  h4: {
    fontSize: undefined,
    fontWeight: undefined,
    lineHeight: undefined,
    textRendering: undefined,
    color: "inherit",
  },
  h3: {
    fontSize: undefined,
    fontWeight: undefined,
    lineHeight: undefined,
    textRendering: undefined,
    color: "inherit",
  },
  h2: {
    fontSize: undefined,
    fontWeight: undefined,
    lineHeight: undefined,
    textRendering: undefined,
    color: "inherit",
  },
  h1: {
    fontSize: undefined,
    fontWeight: undefined,
    lineHeight: undefined,
    textRendering: undefined,
    color: "inherit",
  },
  subtitle1: {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "inherit",
  },
  subtitle2: {
    fontSize: "0.75rem",
    fontWeight: 400,
    color: "inherit",
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    color: "inherit",
  },
  body1: {
    color: "inherit",
  },
  body2: {
    color: "inherit",
  },
  button: {
    textTransform: "none",
  },
});

export const createCashmereTheme = (
  name = "Light",
  mode = "light",
  colorOverrides = {}
) => {
  const palette = themePalette({ ...cashmereColors, ...colorOverrides });
  return createTheme({
    name: name,
    palette: {
      mode: mode,
      ...palette,
    },
    typography: themeTypography(),
    shape: {
      borderRadius: 5,
    },
    transitions: {
      duration: {
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
        standard: 125,
        short: 100,
        shorter: 75,
        shortest: 50,
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
          },
        },
      },
      MuiMenu: {
        defaultProps: {
          elevation: 1,
          disablePortal: true,
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
          disableElevation: true,
          disableRipple: true,
          disableFocusRipple: true,
        },
      },
      MuiCard: {
        defaultProps: {
          variant: "outlined",
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          variant: "contained",
          size: "small",
          disableElevation: true,
          disableRipple: true,
          disableFocusRipple: true,
        },
      },
      MuiToggleButton: {
        defaultProps: {
          disableElevation: true,
          disableRipple: true,
          disableFocusRipple: true,
        },
      },
      MuiFab: {
        defaultProps: {
          variant: "contained",
          size: "small",
          disableElevation: true,
          disableRipple: true,
          disableFocusRipple: true,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
          disableFocusRipple: true,
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: false,
          color: "default",
        },
      },
      MuiChip: {
        defaultProps: {
          deleteIcon: <Icon icon="fa-close" />,
        },
      },
      MuiAccordion: {
        defaultProps: {
          disableGutters: true,
          square: true,
        },
      },
      MuiFormControl: {
        defaultProps: {
          size: "small",
          variant: "outlined",
        },
      },
      MuiNativeSelect: {
        defaultProps: {},
      },
      MuiTextField: {
        defaultProps: {},
      },
      MuiSelect: {
        defaultProps: {},
      },
      MuiInputLabel: {
        defaultProps: {},
      },
      MuiInput: {
        defaultProps: {},
      },
      MuiCheckbox: {
        defaultProps: {
          disableRipple: true,
          checkedIcon: <span className="hc-checkbox-overlay" />,
          indeterminateIcon: (
            <span className="hc-checkbox-overlay hc-checkbox-indeterminate" />
          ),
          icon: <span className="hc-checkbox-overlay" />,
        },
      },
      MuiRadio: {
        defaultProps: {
          disableRipple: true,
          checkedIcon: <span className="hc-radio-overlay" />,
          icon: <span className="hc-radio-overlay" />,
        },
      },
      MuiTabs: {
        defaultProps: {
          disableRipple: true,
          disableTouchRipple: true,
        },
      },
    },
  });
};
export default createCashmereTheme;
