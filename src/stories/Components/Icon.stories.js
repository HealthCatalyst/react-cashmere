import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Icon from '../../components/Icon/Icon';
import { sizeControl, colorControl, colorNames, extraColorNames } from '../config';

export default {
  title: 'Cashmere Components/Icons',
  component: Icon,
  argTypes: {
    size: sizeControl({}, ['default','inherit']),
    color: colorControl({defaultValue: 'inherit'},['inherit'])
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
    <span style={{fontSize: 12, color: "grey"}}>
      <Icon {...args} size="inherit" /> Inherit Icon<br/>
    </span>
  </>
);
Sizing.args = {
  ...defaultArgs,
};
export const Colors = (args) => (
  <>
    <Typography variant='h4'>HealthCatalyst Colors</Typography>
    <Stack direction="row" spacing={.5} alignItems="center">
      {colorNames.concat('inherit').map(color => {
        return <Icon key={color} {...{...args, color}} icon={args.icon} />
      })}
    </Stack>
    <Typography variant='h4' mt={2}>Misc Colors</Typography>
    <Stack direction="row" spacing={.5} alignItems="center">
      {extraColorNames.map(color => {
        return <Icon key={color} {...{...args, color}} icon={args.icon} />
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