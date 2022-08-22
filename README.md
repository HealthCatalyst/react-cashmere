![Master Build Status](https://dev.azure.com/healthcatalyst/CAP/_apis/build/status/HealthCatalyst.react-cashmere?branchName=master)
![Develop Build Status](https://dev.azure.com/healthcatalyst/CAP/_apis/build/status/HealthCatalyst.react-cashmere?branchName=dev)
# Getting Started with React Cashmere

## Install

First you will need an existing react app or create a new project using [create react app](https://reactjs.org/docs/create-a-new-react-app.html).

```
npx create-react-app my-app
```

Install the peer dependencies (You will need React `17.x.x|18.x.x` and Material UI `5.8.x`)

```shell
npm install --save @emotion/styled @mui/lab @mui/material sass
```

Now you can install React Cashmere

```
npm install --save @healthcatalyst/react-cashmere
```

## ThemeProvider

Now you are ready to wrap your app with the ThemeProvider higher order component.
The ThemeProvider will take care of all the cashmere styling and apply it so most Material UI child components are properly themed. There are also custom HC components such as `Icon`, `Navbar`, etc available.

```jsx
/* src/index.js */
import React from "react";
import { ThemeProvider, themes } from "@healthcatalyst/react-cashmere";
import App from "./App";
const [lightTheme, darkTheme] = themes;

export default (props) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  );
};
```

```jsx
/* src/App.js */
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Navbar } from "@healthcatalyst/react-cashmere";

export default (props) => {
  return (
    <>
      <Typography variant="h1">Hello World</Typography>
      <Typography variant="subheading1">
        This is a beautiful app using Material UI and Cashmere
      </Typography>
      <Button color="primary">Button</Button>
      <Button color="primary-alt">Button</Button>
      <Button color="secondary">Button</Button>
    </>
  );
};
```

# Library Development & Contributing

More information about contributing to the repo can be found here:
- [How can I contribute?](CONTRIBUTING.md#how-can-i-contribute)
- [Commit Message Guidelines](CONTRIBUTING.md#commit-message-guidelines)
- [Working with the code](CONTRIBUTING.md#working-with-the-code)
