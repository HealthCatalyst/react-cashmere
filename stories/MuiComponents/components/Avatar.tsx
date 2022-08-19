import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Typography } from "@mui/material";

const classes = {
  root: {
    display: "block",
    justifyContent: "space-between",
  },
  avatarSet: {
    display: "flex",
    margin: 2,
    "& > *": {
      margin: 1,
    },
  },
  primary: {
    color: "primary.contrastText",
    backgroundColor: "primary.main",
  },
  primaryAlt: {
    color: "primary-alt.contrastText",
    backgroundColor: "primary-alt.main",
  },
  small: {
    width: 3*8,
    height: 3*8,
  },
  large: {
    width: 7*8,
    height: 7*8,
  },
};

export default function AvatarExample() {
  return (
    <Box sx={classes.root}>
      <Typography variant="h4">Pictures</Typography>
      <Box sx={classes.avatarSet}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
      </Box>
      <Typography variant="h4">Text</Typography>
      <Box sx={classes.avatarSet}>
        <Avatar>H</Avatar>
        <Avatar sx={classes.primary}>N</Avatar>
        <Avatar sx={classes.primaryAlt}>OP</Avatar>
      </Box>
      <Typography variant="h4">Size</Typography>
      <Box sx={classes.avatarSet}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
          sx={classes.small}
        />
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
          sx={classes.large}
        />
      </Box>
      <Typography variant="h4">Icons</Typography>
      <Box sx={classes.avatarSet}>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar sx={classes.primary}>
          <PageviewIcon />
        </Avatar>
        <Avatar sx={classes.primaryAlt}>
          <AssignmentIcon />
        </Avatar>
      </Box>
      <Typography variant="h4">Group</Typography>
      <Box sx={classes.avatarSet}>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Box>
    </Box>
  );
}
