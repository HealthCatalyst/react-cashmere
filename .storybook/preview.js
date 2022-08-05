import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, themes } from "react-cashmere";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

// Registers and enables code hilighting language support
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("jsx", jsx);

addDecorator((Story, context, ...extra) => {
  const [theme, setTheme] = React.useState(
    themes.find((t) => t.name === context.globals.theme)
  );
  const parentRef = React.useRef();
  React.useEffect(() => {
    const storyContainer = parentRef.current.closest(".docs-story");
    if (storyContainer) {
      storyContainer.style.background = theme.palette.background.default;
      storyContainer.style.color = theme.palette.text.main;
    }
  });
  React.useEffect(() => {
    setTheme(themes.find((t) => t.name === context.globals.theme));
  }, [context.globals.theme]);
  return (
    <div ref={parentRef}>
      <ThemeProvider
        theme={theme}
        onChange={(nextTheme) => setTheme(nextTheme)}
      >
        <Story />
      </ThemeProvider>
    </div>
  );
});

export const parameters = {
  viewMode: "docs",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
  docs: {},
  options: {
    storySort: {
      order: [
        "Introduction",
        "Getting Started",
        "Providers",
        "Cashmere Components",
        "MUI Components",
      ],
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: themes[0].name,
    toolbar: {
      icon: "photo",
      items: themes.map((t) => t.name),
      showName: true,
    },
  },
};
