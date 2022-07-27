import * as React from 'react';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FormatButtons = () => [
    <ToggleButton key="bold" value="bold" aria-label="bold">
      <FormatBoldIcon />
    </ToggleButton>,
    <ToggleButton key="italic" value="italic" aria-label="italic">
      <FormatItalicIcon />
    </ToggleButton>,
    <ToggleButton key="underlined" value="underlined" aria-label="underlined">
      <FormatUnderlinedIcon />
    </ToggleButton>,
    <ToggleButton key="color" value="color" aria-label="color" disabled>
      <FormatColorFillIcon />
      <ArrowDropDownIcon />
    </ToggleButton>
  ];

export default function ToggleButtonGroupExample() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
  const [color, setColor] = React.useState(() => 'primary');
  const handleFormat = (
      event,
      newFormats,
    ) => {
      setFormats(newFormats);
    };
  const handleColor = (
      event,
      newColor,
    ) => {
      if (newColor !== null) {
        setColor(newColor);
      }
    };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          '& > *': {
            m: 1,
          },
        }}
      >
        <code>Formats: {formats.join(", ")}</code>
        <ToggleButtonGroup size="small" value={formats} color={color} onChange={handleFormat}>
          {FormatButtons()}
        </ToggleButtonGroup>
        <ToggleButtonGroup size="medium" value={formats} color={color} onChange={handleFormat}>
          {FormatButtons()}
        </ToggleButtonGroup>
        <ToggleButtonGroup size="large" value={formats} color={color} onChange={handleFormat}>
          {FormatButtons()}
        </ToggleButtonGroup>

        <code>Color: {color}</code>
        <ToggleButtonGroup exclusive color={"secondary"} size="small" orientation="horizontal" value={color} onChange={handleColor}>
          <ToggleButton value="primary">
            Primary
          </ToggleButton>
          <ToggleButton value="primary-alt">
            Primary Alt
          </ToggleButton>
          <ToggleButton value="error">
            Destructive
          </ToggleButton>
          <ToggleButton value="default">
            Neutral
          </ToggleButton>
          <ToggleButton value="secondary" >
            Secondary
          </ToggleButton>
          <ToggleButton value="minimal">
            Minimal
          </ToggleButton> 
        </ToggleButtonGroup>
      </Box>
    </>
  );
}
