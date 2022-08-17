import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import WarnIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import { Typography } from "@mui/material";

const classes = {
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: .5,
    },
  },
};

export default function ChipExample() {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <>
      <Typography variant="h6">Color</Typography>
      <Box sx={classes.root}>
        <Chip label="Primary" color="primary" onClick={handleClick} />
        <Chip label="Secondary" color="secondary" onClick={handleClick} />
        <Chip
          label="Success"
          color="success"
          icon={<DoneIcon />}
          onClick={handleClick}
        />
        <Chip
          label="Warning"
          color="warning"
          icon={<WarnIcon />}
          onDelete={handleDelete}
          onClick={handleClick}
        />
        <Chip
          label="Error"
          color="error"
          icon={<ErrorIcon />}
          onDelete={handleDelete}
          onClick={handleClick}
        />
        <Chip label="Default" color="default" onClick={handleClick} />
      </Box>
      <Typography variant="h6">Default</Typography>
      <Box sx={classes.root}>
        <Chip label="Basic" />
        <Chip label="Disabled" disabled />
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Clickable"
          onClick={handleClick}
        />
        <Chip
          avatar={
            <Avatar
              alt="Natacha"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          }
          label="Deletable"
          onDelete={handleDelete}
        />
        <Chip
          icon={<FaceIcon />}
          label="Clickable deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip label="Clickable Link" component="a" href="#chip" clickable />
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          icon={<FaceIcon />}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          label="Deletable primary"
          onDelete={handleDelete}
          color="primary"
        />
        <Chip
          icon={<FaceIcon />}
          label="Deletable secondary"
          onDelete={handleDelete}
          color="secondary"
        />
      </Box>

      <Typography variant="h6">Outlined</Typography>
      <Box sx={classes.root}>
        <Chip variant="outlined" label="Basic" />
        <Chip variant="outlined" label="Disabled" disabled />
        <Chip
          variant="outlined"
          avatar={<Avatar>M</Avatar>}
          label="Clickable"
          onClick={handleClick}
        />
        <Chip
          variant="outlined"
          avatar={
            <Avatar
              alt="Natacha"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          }
          label="Deletable"
          onDelete={handleDelete}
        />
        <Chip
          variant="outlined"
          icon={<FaceIcon />}
          label="Clickable deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          variant="outlined"
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          variant="outlined"
          label="Clickable Link"
          component="a"
          href="#chip-outlined"
          clickable
        />
        <Chip
          variant="outlined"
          avatar={<Avatar>M</Avatar>}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          variant="outlined"
          icon={<FaceIcon />}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          variant="outlined"
          label="Deletable primary"
          onDelete={handleDelete}
          color="primary"
        />
        <Chip
          variant="outlined"
          icon={<FaceIcon />}
          label="Deletable secondary"
          onDelete={handleDelete}
          color="secondary"
        />
      </Box>
    </>
  );
}
