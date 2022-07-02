# Getting Started with React Cashmere

## Install
First you will need an existing react app or create a new project using [create react app](https://reactjs.org/docs/create-a-new-react-app.html).
```
npx create-react-app my-app
```

Install the peer dependencies (You will need React `17.x.x|18.x.x` and Material UI `5.x.x`)
```shell
npm install --save @emotion/styled @mui/lab @mui/material sass
```

Now you can install React Cashmere
```
npm install --save @healthcatalyst/react-cashmere
```


## ThemeProvider

Now you are ready to wrap your app with the ThemeProvider higher order component. 
The ThemeProvider will take care of all the cashmere styling and apply it so most Material UI child components are properly themed. There are also custom HC components such as `Icon`, `Button`, `Navbar`, etc available.

```jsx
/* src/index.js */
import React from "react";
import { ThemeProvider } from "@healthcatalyst/react-cashmere";
import App from "./App";

export default (props) => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
```

```jsx
/* src/App.js */
import React from "react";
import Typography from '@mui/material/Typography';
import { Navbar, Button } from "@healthcatalyst/react-cashmere";

export default (props) => {
  return (
    <>
      <Navbar
        appIcon="logo.svg"
        brandIcon="brand.svg"
        cobrandIcon="cobrand.png"
        homeUri="http://example.com/"
        linkContent={[
          <div className="hc-navbar-link">
            <a class="navbar-link force-active" title="Home">Home</a>
            <a class="navbar-link" title="Home">Reports</a>
          </div>
        ]}
        rightContent={[
          <div class="hc-navbar-right-container">
            <span class="hc-navbar-vertical-separator" />
            <div class="hc-navbar-username ng-star-inserted" tabIndex="0">
            <span>
            <span>Christine K.</span>
            <br />
            <span class="hc-navbar-username-subtext">HealthCatalyst</span>
            </span> <Icon aria-hidden="true" icon="fa-angle-down"/></div></div>
        ]}
      />
      <Typography variant="h1">Hello World</Typography>
      <Typography variant="subheading1">This is a beautiful app using Material UI and Cashmere</Typography>
      <Button color="primary-action">Button</Button>
      <Button color="primary-alt-action">Button</Button>
      <Button color="secondary">Button</Button>
    </>
  );
}
```

# Library Development & Contributing
## Available Scripts

```
git clone <react-cashmere repo>
```


## Runing storybook locally
The following commands will run storybook locally at [http://localhost:6006/](http://localhost:6006/)
You can navigate to the component you want to modify and the page will reload when you make changes.
```
cd react-cashmere
npm install
npm start
```

If you are creating a new component you will need to add a new story in `./src/components/<Component Name>`\
You will also need to create a new story to document your your component in `./src/stories/<Component Name>.story.js`


## Run Tests
```
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Build
```
npm run build
```

Builds the app for production to the `dist` folder.