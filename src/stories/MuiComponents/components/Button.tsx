import React from "react"
import { makeStyles } from "@mui/styles"
import Button from "@mui/material/Button"
import { Typography } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice"
import SaveIcon from "@mui/icons-material/Save"

const useStyles = makeStyles(theme => ({
  group: {
    "& > *": {
      margin: theme.spacing(1),
    },
    marginBottom: theme.spacing(2),
  },
}))

export default function ButtonsExample() {
  const classes = useStyles()

  return (
    <div>
      <Typography variant="h6" id="text-buttons">
        Default Contained Buttons
      </Typography>
      <div className={classes.group}>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="primary-alt">Primary Alt</Button>
        <Button color="error">Destructive</Button>
        <Button color="default">Neutral</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="minimal">Minimal</Button>
        <Button disabled>Disabled</Button>
        <Button color="primary" href="#text-buttons">
          Link
        </Button>
      </div>

      <Typography variant="h6" id="outlined-buttons">
        Outlined Buttons
      </Typography>
      <div className={classes.group}>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="primary-alt">
          Primary Alt
        </Button>
        <Button variant="outlined" color="error">
          Destructive
        </Button>
        <Button variant="outlined" color="default">
          Neutral
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="minimal">
          Minimal
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
      </div>

      <Typography variant="h6" id="buttons-with-icons">
        Buttons with icons and label
      </Typography>
      <div className={classes.group}>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </div>
    </div>
  )
}
