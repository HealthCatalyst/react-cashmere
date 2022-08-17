import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SnackbarContent from "@mui/material/SnackbarContent";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

const classes = {
    root: {
      maxWidth: 600,
      "& > * + *": {
        marginTop: 2,
      },
    },
  };

export default function SnackbarExample() {
  return (
    <Box sx={classes.root}>
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
    </Box>
  );
}
