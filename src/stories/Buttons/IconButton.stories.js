import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '../../components/Icon/Icon';
import { sizeControl, colorControl, colorNames, extraColorNames } from '../config';

export default {
  title: 'Buttons & Indicators/IconButton',
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: sizeControl(),
    color: colorControl({defaultValue: { summary: 'inherit' }},['inherit'])
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Button component with [Cashemere Styling](https://cashmere.healthcatalyst.net/web/components/button/examples) backed by [MaterialUI Component API](https://mui.com/api/icon-button/) 
        \n\n \`import Button from '@mui/core/Button';\`
        `,
      },
    },
  },
};

const defaultArgs = {
  disabled: false,
  size: "medium",
  icon: "fa-trash",
  color: "inherit"
};


export const Basic = (args) => (
  <IconButton {...args}>
    <Icon icon={args.icon} size={args.size} />
  </IconButton>
);
Basic.args = {
  ...defaultArgs,
};

export const Sizing = (args) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <IconButton {...{...args, size: "small"}} ><Icon icon={args.icon} size="small" /></IconButton>
    <IconButton {...{...args, size: "medium"}} ><Icon icon={args.icon} size="medium" /></IconButton>
    <IconButton {...{...args, size: "large"}} ><Icon icon={args.icon} size="large" /></IconButton>
  </Stack>
);
Sizing.args = {
  ...defaultArgs,
};

export const Colors = (args) => (
  <>
    <Typography variant='h4'>HealthCatalyst Colors</Typography>
    <Stack direction="row" spacing={.5} alignItems="center">
      {colorNames.concat('inherit').map(color => {
        return <IconButton key={color} {...{...args, color}} >
          <Icon icon={args.icon} size={args.size} />
        </IconButton>
      })}
    </Stack>
    <Typography variant='h4' mt={2}>Misc Colors</Typography>
      {extraColorNames.map(color => {
        return <IconButton key={color} {...{...args, color}} sx={{margin: .5, marginLeft: 0}}>
          <Icon icon={args.icon} size={args.size} />
        </IconButton>
      })}
  </>
);
Colors.args = {
  ...defaultArgs,
  size: "small"
};
Colors.parameters = {
  layout: 'padded',
};