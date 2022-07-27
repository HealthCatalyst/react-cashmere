import AccordionExample from "./Accordion";
import AppBarExample from "./AppBar";
import AutocompleteExamples from "./Autocomplete";
import AvatarExample from "./Avatar";
import BadgeExample from "./Badge";
import ButtonExample from "./Button";
import ButtonGroupExample from "./ButtonGroup";
import CardExample from "./Card";
import CheckboxesExample from "./Checkboxes";
import ChipExample from "./Chip";
import DialogExample from "./Dialog";
import FabExample from "./FAB";
import IconExample from "./Icon";
import ListExample from "./List";
import MenuExample from "./Menu";
import ProgressExample from "./Progress";
import RadioExample from "./RadioGroup";
import TabsExample from "./Tabs";
import SnackbarExample from "./Snackbar";
import BottomNavigationExample from "./BottomNavigation";
import SelectExample from "./Select";
import SliderExample from "./Slider";
import StepperExample from "./Stepper";
import SwitchExample from "./Switch";
import TextFieldExample from "./TextField";
import TableExample from "./Table";
import ToggleButtonGroupExample from "./ToggleButtonGroup";
import TooltipExample from "./Tooltip";
import TypographyExample from "./Typography";

// items skipped for now:
// Date/Time inputs
// Transfer List
// Drawer

// Alphabetically sorted list
const sortByKey = (it, key = "title") => {
  it.sort((a, b) => {
    return a[key].localeCompare(b[key], undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  });
  return it;
}

const components =  [
  {
    id: "Accordion",
    title: "Accordion",
    type: "Layout",
    component: AccordionExample,
    docs: "https://mui.com/material-ui/react-accordion/",
  },
  {
    id: "Appbar",
    title: "App Bar",
    type: "Navigation",
    component: AppBarExample,
    docs: "https://mui.com/material-ui/react-app-bar/",
  },
  {
    id: "Autocomplete",
    title: "Autocomplete",
    type: "Form",
    component: AutocompleteExamples,
    docs: "https://mui.com/material-ui/react-autocomplete/",
  },
  {
    id: "Avatar",
    title: "Avatar",
    type: "Data Display",
    component: AvatarExample,
    docs: "https://mui.com/material-ui/react-avatars/",
  },
  {
    id: "Badge",
    title: "Badge",
    type: "Data Display",
    component: BadgeExample,
    docs: "https://mui.com/material-ui/react-badges/",
  },
  {
    id: "BottomNavigation",
    title: "Bottom Navigation",
    type: "Navigation",
    component: BottomNavigationExample,
    docs: "https://mui.com/material-ui/react-bottom-navigation/",
  },
  {
    id: "Button",
    title: "Button",
    type: "Buttons",
    component: ButtonExample,
    docs: "https://mui.com/material-ui/react-button/",
  },
  {
    id: "ButtonGroup",
    title: "Button Group",
    type: "Buttons",
    component: ButtonGroupExample,
    docs: "https://mui.com/material-ui/react-button-group/",
  },
  {
    id: "ToggleButtonGroup",
    title: "Toggle Button Group",
    type: "Buttons",
    component: ToggleButtonGroupExample,
    docs: "https://mui.com/material-ui/react-toggle-button/",
  },
  {
    id: "Card",
    title: "Card",
    type: "Layout",
    component: CardExample,
    docs: "https://mui.com/material-ui/react-card/",
  },
  {
    id: "Checkboxes",
    title: "Checkboxes",
    type: "Form",
    component: CheckboxesExample,
    docs: "https://mui.com/material-ui/react-checkbox/",
  },
  {
    id: "Chip",
    title: "Chip",
    type: "Indicators",
    component: ChipExample,
    docs: "https://mui.com/material-ui/react-chip/",
  },
  {
    id: "Dialog",
    title: "Dialog",
    type: "Indicators",
    component: DialogExample,
    docs: "https://mui.com/material-ui/react-dialog/",
  },
  {
    id: "FloatingActionButton",
    title: "Floating Action Button",
    type: "Buttons",
    component: FabExample,
    docs: "https://mui.com/material-ui/react-floating-action-button/",
  },
  {
    id: "Icon",
    title: "Icon",
    type: "Data Display",
    component: IconExample,
    docs: "https://mui.com/material-ui/icons/",
  },
  {
    id: "List",
    title: "List",
    type: "Data Display",
    component: ListExample,
    docs: "https://mui.com/material-ui/react-lists/",
  },
  {
    id: "Menu",
    title: "Menu",
    type: "Navigation",
    component: MenuExample,
    docs: "https://mui.com/material-ui/react-menus/",
  },
  {
    id: "Progress",
    title: "Progress",
    type: "Indicators",
    component: ProgressExample,
    docs: "https://mui.com/material-ui/react-progress/",
  },
  {
    id: "Radio",
    title: "Radio",
    type: "Form",
    component: RadioExample,
    docs: "https://mui.com/material-ui/react-radio-button/",
  },
  {
    id: "Select",
    title: "Select",
    type: "Form",
    component: SelectExample,
    docs: "https://mui.com/material-ui/react-select/",
  },
  {
    id: "Slider",
    title: "Slider",
    type: "Form",
    component: SliderExample,
    docs: "https://mui.com/material-ui/react-slider/",
  },
  {
    id: "Snackbar",
    title: "Snackbar",
    type: "Indicators",
    component: SnackbarExample,
    docs: "https://mui.com/material-ui/react-snackbar/",
  },
  {
    id: "Stepper",
    title: "Stepper",
    type: "Navigation",
    component: StepperExample,
    docs: "https://mui.com/material-ui/react-stepper/",
  },
  {
    id: "Switch",
    title: "Switch",
    type: "Form",
    component: SwitchExample,
    docs: "https://mui.com/material-ui/react-switche/",
  },
  {
    id: "Table",
    title: "Table",
    type: "Data Display",
    component: TableExample,
    docs: "https://mui.com/material-ui/react-table/",
  },
  {
    id: "Tabs",
    title: "Tabs",
    type: "Navigation",
    component: TabsExample,
    docs: "https://mui.com/material-ui/react-tabs/",
  },
  {
    id: "TextField",
    title: "TextField",
    type: "Form",
    component: TextFieldExample,
    docs: "https://mui.com/material-ui/react-text-field/",
  },
  {
    id: "Tooltip",
    title: "Tooltip",
    type: "Indicators",
    component: TooltipExample,
    docs: "https://mui.com/material-ui/react-tooltip/",
  },
  {
    id: "Typography",
    title: "Typography",
    type: "Data Display",
    component: TypographyExample,
    docs: "https://mui.com/material-ui/react-typography/",
  },
];
export default sortByKey(components);

const byType = {};
components.forEach((c) => {
  if(!byType[c.type]) {
    byType[c.type] = [];
  }
  byType[c.type].push(c);
});

export const componentsByType = sortByKey(Object.keys(byType).map((key) => ({title: key, components: byType[key]})));