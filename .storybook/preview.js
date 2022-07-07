import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeProvider, { themes } from '../src/providers/ThemeProvider/ThemeProvider';
import { Canvas } from '@storybook/addon-docs';

addDecorator((story, context) => {
  const parentRef = React.useRef();
  const theme = themes.find(t => t.name === context.globals.theme);
  React.useEffect(() => {
    const storyContainer = parentRef.current.closest(".docs-story");
    if(storyContainer) {
      storyContainer.style.background = theme.palette.background.default;
      storyContainer.style.color = theme.palette.text.main;
    }
  });
  return (
    <div ref={parentRef}>
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </div>
  );
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
  docs: {}
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: themes[0].name,
    toolbar: {
      icon: 'photo',
      items: themes.map(t => t.name),
      showName: true,
    },
  },
};