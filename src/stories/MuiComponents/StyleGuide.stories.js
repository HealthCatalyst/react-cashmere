import React from 'react';
import { storiesOf } from '@storybook/react';
import componentSamples from "./components";
import Link from '@mui/material/Link';

const stories = storiesOf('Mui Base Components/Style Guide', () => <></>);

componentSamples.forEach(({ id, title, component, docs }) => {
  const Component = component;
  stories.add(title, (args) => <>
    <Component {...args} />
    <br/><br/>
    See <Link href={docs} target="_blank">{docs}</Link> for the full mui {title} documentation.<br/><br/>
  </>);
});


