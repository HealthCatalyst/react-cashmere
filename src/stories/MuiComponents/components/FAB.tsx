import React from "react"
import { createStyles, makeStyles } from "@mui/styles"
import Fab from "@mui/material/Fab"
import AddIcon from "@mui/icons-material/Add"
import EditIcon from "@mui/icons-material/Edit"
import FavoriteIcon from "@mui/icons-material/Favorite"
import NavigationIcon from "@mui/icons-material/Navigation"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
)

export default function FabExample() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </div>
  )
}
