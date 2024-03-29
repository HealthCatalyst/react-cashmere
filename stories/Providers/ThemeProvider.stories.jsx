import React from "react";
import { themes, useTheme, Icon, ThemeProvider } from "react-cashmere";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button, Paper } from "@mui/material";

export default {
  title: "Providers/ThemeProvider",
  component: ThemeProvider,
  argTypes: {},
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const defaultArgs = {};

export const ThemeProviderExample = (args) => {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={1}>
        <Button color="primary">"primary" Themed Button</Button>
        <Button color="primary-alt">"primary-alt" Themed Button</Button>
      </Stack>
    </ThemeProvider>
  );
};
ThemeProviderExample.component = ThemeProvider;
ThemeProviderExample.storyName = "ThemeProvider";
ThemeProviderExample.args = {
  ...defaultArgs,
};

export const Advanced = (args) => {
  const [theme, setTheme] = useTheme();
  return (
    <>
      <code>const [theme, setTheme] = useTheme();</code>
      <br />
      <br />
      Current Theme: {theme.name}
      <br />
      <br />
      <Stack direction="row" spacing={1}>
        {themes.map((theme, key) => (
          <Button key={key} color="secondary" onClick={() => setTheme(theme)}>
            {theme.name}
          </Button>
        ))}
      </Stack>
    </>
  );
};
Advanced.storyName = "useTheme() Hook";
Advanced.args = {
  ...defaultArgs,
};

const ColorCard = ({ name, palette }) => {
  return (
    <Paper>
      <Box borderRadius={1} overflow="hidden">
        <Grid container>
          <Grid item xs={6}>
            <Box
              p={1}
              color={palette.contrastText}
              height={100}
              style={{ background: palette.main }}
            >
              main
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              p={1}
              color={palette.contrastText}
              height={50}
              style={{ background: palette.light }}
            >
              light
            </Box>
            <Box
              p={1}
              color={palette.contrastText}
              height={50}
              style={{ background: palette.dark }}
            >
              dark
            </Box>
          </Grid>
        </Grid>
        <Box p={1}>
          <Icon icon="fa-key" /> <strong>{name}</strong>
          <br />
          <Typography variant="caption" color="secondary">
            <Icon icon="fas fa-eyedropper" /> {palette.main}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export const Colors = (args) => {
  const [theme] = useTheme();
  const materialColors = [
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
    "info",
    "default",
  ];
  const miscColors = Object.keys(theme.palette)
    .filter((key) => theme.palette[key].main)
    .filter((c) => !materialColors.includes(c));
  return (
    <>
      <code>
        theme.palette[
        <Icon icon="fa-key" />
        key]['main', 'light', 'dark', 'contrastText'];
      </code>
      <br />
      <br />

      <Typography variant="h2" mt={2} mb={2}>
        Material Colors
      </Typography>
      <Grid container spacing={4}>
        {materialColors.map((key, index) => {
          return (
            <Grid item key={key + index} xs={6} sm={3} md={2}>
              <ColorCard name={key} palette={theme.palette[key]} />
            </Grid>
          );
        })}
      </Grid>

      <Typography variant="h2" mt={2} mb={2}>
        Misc Colors
      </Typography>
      <Grid container spacing={4}>
        {miscColors.map((key, index) => {
          return (
            <Grid item key={key + index} xs={6} sm={3} md={2}>
              <ColorCard name={key} palette={theme.palette[key]} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
Colors.args = {
  ...defaultArgs,
};
Colors.parameters = {
  layout: "padded",
};
