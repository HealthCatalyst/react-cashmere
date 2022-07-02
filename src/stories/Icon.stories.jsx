import React from 'react';
import Icon, {iconSizes} from '../components/Icon/Icon';
import Box from '@mui/material/Box';


export default {
  title: 'Typography/Icons',
  component: Icon,
  argTypes: {
    size: {
      control: 'radio', options: iconSizes
    },
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
  icon: "fa-cog",
  size: "medium"
};


const Template = (args) => <Icon {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...defaultArgs,
};

export const Sizing = (args) => (
  <>
    <Icon {...args} size="small" /> Small Icon<br/><br/>
    <Icon {...args} size="medium" /> Medium Icon<br/><br/>
    <Icon {...args} size="large" /> Large Icon<br/><br/>
    <span style={{fontSize: 12, color: "grey"}}><Icon {...args} size="inherit" /> Inherit Icon</span><br/>
  </>
);
Sizing.args = {
  ...defaultArgs,
};