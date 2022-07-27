export const colorNames = [
  "primary",
  "primary-alt",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
  "default",
];
export const extraColorNames = [
  // Primary Palette
  "blue",
  "green",
  "purple",
  "red",
  "orange",
  // Secondary Palette
  "ruby-red",
  "deep-red",
  "red-orange",
  "pink",
  "light-pink",
  "brown",
  "magenta",
  "purple-gray",
  "azure",
  "teal",
  "dark-green",
  "light-green",
  "tan",
  "yellow",
  "yellow-orange",
];
export const allColorNames = colorNames.concat(extraColorNames);

export const colorControl = (overrides = {}, exrtaOptions = []) => ({
  control: "select",
  options: allColorNames.concat(exrtaOptions),
  description: "What color should the component be",
  defaultValue: { summary: "primary" },
  ...overrides,
});

export const sizeControl = (overrides = {}, exrtaOptions = []) => ({
  control: "radio",
  options: ["small", "medium", "large"].concat(exrtaOptions),
  description: "How large the component should be",
  table: {
    defaultValue: { summary: "medium" },
  },
  ...overrides,
});
