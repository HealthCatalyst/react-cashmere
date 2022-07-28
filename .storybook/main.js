const path = require("path");

/**
 * NOTE: Override CRA.
 * https://github.com/storybookjs/storybook/issues/9514#issuecomment-679350377
 */
const addStoriesPathToCRA = (config, storiesPath = "../stories") => {
  const ruleWithOneOf = config.module.rules.find(
    (rule) => !!rule && !!rule.oneOf
  );
  const isFound = ruleWithOneOf.oneOf.some((item) => {
    if (
      Array.isArray(item.include) &&
      item.include.find((a) => a.includes("/src"))
    ) {
      item.include.push(path.join(__dirname, storiesPath));
      return true;
    }
    return false;
  });

  if (isFound) {
    console.log(
      `Removed CRA limitation to force storybook files to stay inside of '/src'.`
    );
  } else {
    console.error(
      `Could not find the rule that forces stories to exist inside of '/src'.`
    );
  }

  return config;
};

stories = {
  // 👇 The directory field sets the directory your stories
  directory: "../stories",
  // 👇 The titlePrefix field will generate automatic titles for your stories
  titlePrefix: "",
  // 👇 Storybook will load all files that contain the stories extension
  files: "**/*.stories.*",
};

module.exports = {
  stories: [stories],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true,
  },
  webpackFinal: async (config) => {
    addStoriesPathToCRA(config, stories.directory);
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "react-cashmere": path.resolve(__dirname, "../src/index.js"),
        },
      },
    };
  },
};
