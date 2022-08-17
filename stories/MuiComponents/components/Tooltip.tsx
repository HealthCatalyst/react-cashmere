import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const classes = {
  fab: {
    margin: 2,
  },
};

export default function TooltipExample() {
  return (
    <div>
      <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add" aria-label="add">
        <Fab color="primary" sx={classes.fab} size="small">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Add" aria-label="add">
        <Fab color="secondary" sx={classes.fab} size="small">
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
