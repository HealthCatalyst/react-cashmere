import React from 'react';
import { ThemeProvider, themes, useTheme } from '../../providers/ThemeProvider/ThemeProvider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { sizeControl, colorControl, colorNames, extraColorNames } from '../config';
import { Button, Paper } from '@mui/material';

export default {
  title: 'Providers/ThemeProvider',
  component: Typography,
  argTypes: {
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '',
      },
    },
  },
};

const defaultArgs = {
};

export const Advanced = (args) => {
  const [theme, setTheme] = useTheme();
  return (
    <>
      <code>
        const [theme, setTheme] = useTheme();
      </code><br/><br/>
      Current Theme: {theme.name}<br/><br/>
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
Advanced.args = {
  ...defaultArgs,
};

export const Colors = (args) => {
  const [theme] = useTheme();
  const colors = Object.keys(theme.palette).filter(key => theme.palette[key].main);
  return (
    <>
      <code>theme.palette[key][main, light, dark, contrastText];</code><br/><br/>
      <Grid container spacing={4}>
        {colors.map((key, index) => { 
          const palette = theme.palette[key];
          return (
            <Grid item key={key+index} xs={6} sm={3} md={2}>
              <Paper>
                <Box borderRadius={1} overflow="hidden">
                  <Grid container>
                    <Grid item xs={6}>
                      <Box p={1} color={palette.contrastText} height={100} style={{background: palette.main}} >main</Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box p={1} color={palette.contrastText} height={50}  style={{background: palette.light}} >light</Box>
                      <Box p={1} color={palette.contrastText} height={50} style={{background: palette.dark}} >dark</Box>
                    </Grid>
                  </Grid>
                  <Box p={1}>
                    {key}<br />
                    <small>{palette.main}</small>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
Colors.args = {
  ...defaultArgs,
  size: "small"
};
Colors.parameters = {
  layout: 'padded',
};