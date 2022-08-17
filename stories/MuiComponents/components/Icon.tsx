import React from "react";
import { green } from "@mui/material/colors";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";

const classes = {
  root: {
    "& > svg": {
      margin: 2,
    },
  },
};

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function IconExample() {
  return (
    <Box sx={classes.root}>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon style={{ color: green[500] }} />
    </Box>
  );
}
