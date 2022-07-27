import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const FormatButtons = () => [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
  <Button key="four" disabled>
    Four
  </Button>,
];

export default function ToggleButtonGroupExample() {
  const [color, setColor] = React.useState(() => "primary");
  const [variant, setVariant] = React.useState(() => "contained");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="small" color={color} variant={variant}>
          {FormatButtons()}
        </ButtonGroup>
        <ButtonGroup size="medium" color={color} variant={variant}>
          {FormatButtons()}
        </ButtonGroup>
        <ButtonGroup size="large" color={color} variant={variant}>
          {FormatButtons()}
        </ButtonGroup>
        <code>Color: {color}</code>
        <ButtonGroup color={"secondary"} size="small">
          <Button onClick={() => setColor("primary")}>Primary</Button>
          <Button onClick={() => setColor("primary-alt")}>Primary Alt</Button>
          <Button onClick={() => setColor("error")}>Destructive</Button>
          <Button onClick={() => setColor("default")}>Neutral</Button>
          <Button onClick={() => setColor("secondary")}>Secondary</Button>
          <Button onClick={() => setColor("minimal")}>Minimal</Button>
        </ButtonGroup>
        <code>Variant: {variant}</code>
        <ButtonGroup color={"secondary"} size="small">
          <Button onClick={() => setVariant("contained")}>Contained</Button>
          <Button onClick={() => setVariant("outlined")}>Outlined</Button>
          <Button onClick={() => setVariant("text")}>Text</Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
