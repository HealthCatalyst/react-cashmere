import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeProvider from '../src/providers/ThemeProvider/ThemeProvider';
import { Canvas } from '@storybook/addon-docs';

addDecorator((story) => (
    <ThemeProvider>{story()}</ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {}
}