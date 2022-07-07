import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { sizeControl, colorControl, colorNames, extraColorNames } from '../config';

export default {
  title: 'Typography/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select', options: ["h1",  "h2",  "h3",  "h4",  "h5",  "h6",  "subtitle1",  "subtitle2",  "body1",  "body2",  "button",  "caption",  "overline"]
    }
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
  variant: "body1"
};


const Template = (args) => <Typography {...args}>{args.variant}: Lorem ipsum dolor sit.</Typography>;

export const Basic = Template.bind({});
Basic.args = {
  ...defaultArgs,
  variant: "body1"
};

export const Variants = (args) => (
  <>
    <Typography variant="h1" gutterBottom>
      h1. Heading
    </Typography>
    <Typography variant="h2" gutterBottom>
      h2. Heading
    </Typography>
    <Typography variant="h3" gutterBottom>
      h3. Heading
    </Typography>
    <Typography variant="h4" gutterBottom>
      h4. Heading
    </Typography>
    <Typography variant="subtitle1" gutterBottom component="div">
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="subtitle2" gutterBottom component="div">
      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="body1" gutterBottom>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography variant="body2" gutterBottom>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <Typography variant="button" display="block" gutterBottom>
      button text
    </Typography>
    <Typography variant="caption" display="block" gutterBottom>
      caption text
    </Typography>
    <Typography variant="overline" display="block" gutterBottom>
      overline text
    </Typography>
    <Link href="http://example.com/" target={"_blank"}>http://example.com/</Link>
  </>
);
Variants.args = {
  ...defaultArgs,
};

export const Colors = (args) => (
  <>
    <Typography variant='h4'>Colors</Typography>
    <Stack direction="row" spacing={.5} alignItems="center">
      {['primary', 'secondary', 'error', 'default', 'inherit'].map(color => {
        return <Typography key={color} {...{...args, color}} >{color}</Typography>
      })}
    </Stack>
  </>
);
Colors.args = {
  ...defaultArgs,
  size: "small"
};
Colors.parameters = {
  layout: 'padded',
};