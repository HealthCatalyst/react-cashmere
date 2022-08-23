[![npm version](https://badge.fury.io/js/@healthcatalyst%2Freact-cashmere.svg)](https://www.npmjs.com/package/@healthcatalyst/react-cashmere)
![Master Build Status](https://dev.azure.com/healthcatalyst/CAP/_apis/build/status/HealthCatalyst.react-cashmere?branchName=master)
![Develop Build Status](https://dev.azure.com/healthcatalyst/CAP/_apis/build/status/HealthCatalyst.react-cashmere?branchName=dev)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
# Getting Started with React Cashmere

## Install

First you will need an existing react app or create a new project using [create react app](https://reactjs.org/docs/create-a-new-react-app.html).

```
npx create-react-app my-app
```

Install the peer dependencies (You will need React `17.x.x|18.x.x` and Material UI `5.8.x`)

```shell
npm install --save @mui/lab @mui/material
```

Now you can install React Cashmere and fonts

```
npm install --save @healthcatalyst/react-cashmere
npm install --save sass font-awesome notosans-fontface @healthcatalyst/cashmere
```

## Adding Fonts

Create a sass file to import the desired fonts. These fonts are optional if your app does not need them.

```scss
/* src/fonts.scss */
$fa-font-path: "~font-awesome/fonts";
@import "~font-awesome/scss/font-awesome";

$notosans-fontface-path: "~notosans-fontface/fonts";
@import "~notosans-fontface/scss/notosans-fontface-allweight";

$hc-icons-font-path: "~@healthcatalyst/cashmere/hcicons";
@import "~@healthcatalyst/cashmere/hcicons/hcicons";
```

## ThemeProvider 

Now you are ready to wrap your app with the ThemeProvider higher order component.
The ThemeProvider will take care of all the cashmere styling and apply it so most Material UI child components are properly themed. There are also custom HC components such as `Icon`, `Navbar`, etc available.

```jsx
/* src/index.js */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, themes } from "@healthcatalyst/react-cashmere";
import "./fonts.scss";
const [lightTheme, darkTheme] = themes;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

```jsx
/* src/App.js */
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Icon, Navbar } from "@healthcatalyst/react-cashmere";

const App = (props) => {
  return (
    <Box mt={"53px"} p={2}>
      <Navbar
        position="fixed"
        appIcon="My App"
        brandIcon={<Icon size="large" icon={"hci-catalyst-logo"} />}
        linkContent={[]}
        rightContent={<Box p={2}>Welcome, User!</Box>}
      />
      <Typography variant="h1" pb={2}>
        Hello Cashmere!
      </Typography>
      <Typography variant="subheading1">
        This app is using React, Material UI and themed with Cashmere.
      </Typography>
      <Typography variant="h2" pt={3}>
        Butons
      </Typography>
      <Button color="primary">Button</Button>
      &nbsp;
      <Button color="secondary">Button</Button>
      <Typography variant="h2" pt={3}>
        Icons
      </Typography>
      Font Awesome: <Icon size="large" icon={"fa-cog"} />
      <br />
      Health Catalyst Icons: <Icon size="large" icon={"hci-catalyst-logo"} />
      <br />
    </Box>
  );
};

export default App;
```

# Library Development & Contributing

More information about contributing to the repo can be found here:
- [How can I contribute?](CONTRIBUTING.md#how-can-i-contribute)
- [Commit Message Guidelines](CONTRIBUTING.md#commit-message-guidelines)
- [Working with the code](CONTRIBUTING.md#working-with-the-code)
