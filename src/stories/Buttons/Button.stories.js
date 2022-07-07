import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Icon from '../../components/Icon/Icon';
import { sizeControl, colorControl, colorNames, extraColorNames } from '../config';

export default {
  title: 'Buttons & Indicators/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: sizeControl(),
    color: colorControl()
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Button component with [Cashemere Styling](https://cashmere.healthcatalyst.net/web/components/button/examples) backed by [MaterialUI Component API](https://mui.com/api/button/) 
        \n\n \`import Button from '@mui/core/Button';\`
        `,
      },
    },
  },
};

const defaultArgs = {
  color: "primary",
  size: 'medium',
  children: 'Button',
  disabled: false
};

const ButtonTemplate = (args) => <Button {...args} />;

export const Basic = ButtonTemplate.bind({});
Basic.args = {
  ...defaultArgs,
};

export const Sizing = (args) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <Button {...{...args, size: "small"}} >small</Button>
    <Button {...{...args, size: "medium"}} >medium</Button>
    <Button {...{...args, size: "large"}} >large</Button>
  </Stack>
);
Sizing.args = {
  ...defaultArgs,
};

export const Colors = (args) => (
  <>
    <Typography variant='h4'>HealthCatalyst Colors</Typography>
    <Stack direction="row" spacing={.5} alignItems="center">
      {colorNames.map(color => {
        return <Button key={color} {...{...args, color}} >{color}</Button>
      })}
    </Stack>
    <Typography variant='h4' mt={2}>Extra Colors</Typography>
    <Stack direction="row" spacing={.5} alignItems="center">
      {['minimal', 'link', 'link-inline'].map(color => {
        return <Button key={color} {...{...args, color}} >{color}</Button>
      })}
    </Stack>
    <Typography variant='h4' mt={2}>Misc Colors</Typography>
      {extraColorNames.map(color => {
        return <Button key={color} {...{...args, color}} sx={{margin: .5, marginLeft: 0}}>{color}</Button>
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

export const IconButtons = (args) => (
  <>
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1} alignItems="center">
        <Button 
          color="primary" 
          size={args.size}
          disabled={args.disabled}
        >
          <Icon icon="fa-cog" />
          &nbsp;Options&nbsp;
          <Icon icon="fa-chevron-down" />
        </Button>
        <Button 
          color="primary-alt"
          size={args.size}
          disabled={args.disabled}
        >
            <Icon icon="fa-undo" />
            &nbsp;Undo
        </Button>
        <Button 
          color={args.color} 
          size={args.size}
          disabled={args.disabled}
        >
            <Icon icon={args.icon} />
            &nbsp;Trash
        </Button>
      </Stack>
    </Stack>
  </>
);
IconButtons.args = {
  disabled: false,
  size: "medium",
  icon: "fa-trash",
  color: "secondary"
};
