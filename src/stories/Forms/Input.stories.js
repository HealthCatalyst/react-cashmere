import React from 'react';
import TextField from '@mui/material/TextField';

export default {
  title: 'Forms/TextField',
  component: TextField,
  argTypes: {
    variant: {
      control: 'select', options: ["outlined"]
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
  variant: "outlined",
  label: "Label",
  disabled: false,
  error: false,
  helperText: "Helper Text"
};


const Template = (args) => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...defaultArgs,
};

export const Variants = (args) => (
  <>
  </>
);
Variants.args = {
  ...defaultArgs,
};