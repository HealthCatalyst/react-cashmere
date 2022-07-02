import { colors } from '@mui/material';
import { createTheme, darken, lighten } from '@mui/material/styles';
import cashmere from './cashmere.scss';
import cashmereColors from './colors.scss';

const themePalette = (colors) => {
    const palette = {};
    Object.keys(colors).forEach(key => {
        const c = colors[key];
        if(typeof c == "object" ) {
            palette[key] = c;
        }
        else {
            palette[key] = {
                main: colors[key],
                light: lighten(colors[key], 0.2),
                dark: darken(colors[key], 0.2),
                contrastText: colors['white']
            }
        }
        
    });
    return palette;
};

const themeTypography = (theme = {}) => ({
    fontFamily: cashmere['font-family'],
    fontSize: parseInt(cashmere['font-size'], 10),
    color: "inherit",
    h6: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.5,
        color: "inherit"
    },
    h5: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.5,
        color: "inherit"
    },
    h4: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.5,
        color: "inherit"
    },
    h3: {
        fontSize: 18,
        fontWeight: 600,
        lineHeight: 1.5,
        color: "inherit"
    },
    h2: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: 1.5,
        color: "inherit"
    },
    h1: {
        fontSize: 36,
        fontWeight: 300,
        lineHeight: 1.2,
        textRendering: 'optimizeLegibility',
        color: "inherit"
    },
    subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: "inherit"
    },
    subtitle2: {
        fontSize: '0.75rem',
        fontWeight: 400,
        color: "inherit"
    },
    caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        color: "inherit"
    },
    body1: {
        color: "inherit"
    },
    body2: {
        color: "inherit"
    },
    button: {
        textTransform: 'none'
    },
});

export const createCashmereTheme = (name = 'Light', mode = 'light', colors = cashmereColors) => {
    return createTheme({
        name: name,
        palette: {
            mode: mode,
            ...themePalette(colors),
        },
        typography: themeTypography(),
        shape: {
            borderRadius: 5
        },
        transitions: {
            duration: {
                complex: 375,
                enteringScreen: 225,
                leavingScreen: 195,
                short: 0,
                shorter: 0,
                shortest: 0,
                standard: 0
            }
        },
        components: {
            MuiLink: {
                styleOverrides: {
                    root: {
                        textDecoration: 'none',
                    },
                },
            },
            MuiButton: {
                defaultProps: {
                    variant: "contained",
                    className: "hc-button",
                    disableElevation: true,
                    disableRipple: true,
                    disableFocusRipple: true
                },
                styleOverrides: {
                    root: {
                    },
                },
            },
        },
    });
};


const lightTheme = createCashmereTheme();
const darkTheme = createCashmereTheme('Dark', 'dark', {...cashmereColors, background: {default: "#333", paper: "#000"}, text: "#fff"});

export default lightTheme;

export const themes = {
    lightTheme,
    darkTheme
};