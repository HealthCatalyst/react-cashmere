import { colors } from '@mui/material';
import { red } from '@mui/material/colors';
import { createTheme, darken, lighten, alpha } from '@mui/material/styles';
import cashmere from './scss/cashmere.scss';
import cashmereColors from './scss/colors.scss';

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
                contrastText: key !== 'white' ? colors['white'] : 'black'
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
        fontSize: undefined,
        fontWeight: undefined,
        lineHeight: undefined,
        textRendering: undefined,
        color: "inherit"
    },
    h5: {
        fontSize: undefined,
        fontWeight: undefined,
        lineHeight: undefined,
        textRendering: undefined,
        color: "inherit"
    },
    h4: {
        fontSize: undefined,
        fontWeight: undefined,
        lineHeight: undefined,
        textRendering: undefined,
        color: "inherit"
    },
    h3: {
        fontSize: undefined,
        fontWeight: undefined,
        lineHeight: undefined,
        textRendering: undefined,
        color: "inherit"
    },
    h2: {
        fontSize: undefined,
        fontWeight: undefined,
        lineHeight: undefined,
        textRendering: undefined,
        color: "inherit"
    },
    h1: {
        fontSize: undefined,
        fontWeight: undefined,
        lineHeight: undefined,
        textRendering: undefined,
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
                    disableElevation: true,
                    disableRipple: true,
                    disableFocusRipple: true
                }
            },
            MuiIconButton: {
                defaultProps: {
                    disableRipple: true,
                    disableFocusRipple: true
                }
            },
            MuiTextField: {
                defaultProps: {
                    variant: "outlined",
                    className: "hc-input",
                    size: "small",
                },
                styleOverrides: {
                    root: {
                        "& .MuiOutlinedInput-input.Mui-disabled": {
                            backgroundColor: "#88888818"
                        },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 0,
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderWidth: "1px !important",
                            },
                            '& input:focus': {
                                borderColor: colors.primary,
                                boxShadow: `${alpha(colors.primary, 0.25)} 0 0 0 0.2rem`,
                            },
                        }
                    },
                },
            },
        },
    });
};


const lightTheme = createCashmereTheme();
const darkTheme = createCashmereTheme('Dark', 'dark', {...cashmereColors, background: {default: "#333", paper: "#121212"}, text: "#fff"});

export default lightTheme;

export const themes = [
    lightTheme,
    darkTheme
];