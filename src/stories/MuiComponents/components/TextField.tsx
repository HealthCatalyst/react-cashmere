import React from "react"
import TextField from "@mui/material/TextField"
import { createStyles, makeStyles, Theme } from "@mui/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > div > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
)

export default function TextFieldExample() {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="standard-search" label="Search field" type="search" />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
        <TextField
          error
          id="standard-helperText-error"
          label="Helper text error"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
    </form>
  )
}
