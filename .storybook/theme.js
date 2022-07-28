import { create } from "@storybook/theming";
const storybookTheme = create({
  colorPrimary: "#00aeff",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "#fafafa",
  appContentBg: "#fff",
  appBorderColor: "#eaeaea",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#000",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#000",
  barSelectedColor: "#00aeff",
  barBg: "#fff",

  base: "light",
  brandTitle: "React Cashmere",
  brandUrl: "https://cashmere.healthcatalyst.net/home",
  brandImage: "https://cashmere.healthcatalyst.net/assets/Cashmere.svg",
  brandTarget: "_blank",
});
export default storybookTheme;
