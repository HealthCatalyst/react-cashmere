import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple, pink, green } from "@mui/material/colors";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "block",
      justifyContent: "space-between",
    },
    avatarSet: {
      display: "flex",
      margin: theme.spacing(2),
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    pink: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
    },
    green: {
      color: "#fff",
      backgroundColor: green[500],
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

export default function AvatarExample() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">Pictures</Typography>
      <div className={classes.avatarSet}>
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
      </div>
      <Typography variant="h4">Text</Typography>
      <div className={classes.avatarSet}>
        <Avatar>H</Avatar>
        <Avatar className={classes.orange}>N</Avatar>
        <Avatar className={classes.purple}>OP</Avatar>
      </div>
      <Typography variant="h4">Size</Typography>
      <div className={classes.avatarSet}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
          className={classes.small}
        />
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
          className={classes.large}
        />
      </div>
      <Typography variant="h4">Icons</Typography>
      <div className={classes.avatarSet}>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar className={classes.pink}>
          <PageviewIcon />
        </Avatar>
        <Avatar className={classes.green}>
          <AssignmentIcon />
        </Avatar>
      </div>
      <Typography variant="h4">Group</Typography>
      <div className={classes.avatarSet}>
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
      </div>
    </div>
  );
}
