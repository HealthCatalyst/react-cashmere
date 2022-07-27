import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const useStyles = makeStyles((theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(2),
    },
  })
);

export default function TooltipExample() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add" aria-label="add">
        <Fab color="primary" className={classes.fab} size="small">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Add" aria-label="add">
        <Fab color="secondary" className={classes.fab} size="small">
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
