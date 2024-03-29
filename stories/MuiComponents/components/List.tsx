import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

const classes = {
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: 'background.paper',
  },
  title: {
    margin: 2,
    fontWeight: "bold"
  },
  controls: {
    marginLeft: 2
  }
};

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function ListExample() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={classes.root}>
      <FormGroup row sx={classes.controls}>
        <FormControlLabel
          control={
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Enable secondary text"
        />
      </FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={classes.title}>
            Text only
          </Typography>
          <Box sx={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              )}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={classes.title}>
            Icon with text
          </Typography>
          <Box sx={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              )}
            </List>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={classes.title}>
            Avatar with text
          </Typography>
          <Box sx={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              )}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={classes.title}>
            Avatar with text and icon
          </Typography>
          <Box sx={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
