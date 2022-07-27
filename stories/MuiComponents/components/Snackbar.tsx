import React from "react";
import Button from "@mui/material/Button";
import { createStyles, makeStyles } from "@mui/styles";
import SnackbarContent from "@mui/material/SnackbarContent";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 600,
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export default function SnackbarExample() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SnackbarContent
        severity={"primary"}
        message="I love snacks."
        action={action}
      />
      <SnackbarContent
        severity={"secondary"}
        message={
          "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
        }
        action={
          <IconButton size="small" aria-label="close" severity="inherit">
            <CloseIcon />
          </IconButton>
        }
      />
      <SnackbarContent
        severity={"error"}
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />
      <SnackbarContent
        severity={"warning"}
        message={
          "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
        }
        action={action}
      />
    </div>
  );
}
