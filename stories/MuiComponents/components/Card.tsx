import React from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Grid,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  Collapse,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const useStyles = makeStyles((theme) => ({
  rootSimple: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  rootComplex: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "40%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function CardExample() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography variant="h6">Simple</Typography>
        <Card className={classes.rootSimple}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
            <Button size="small" color="primary-alt">
              Save
            </Button>
            <Button size="small" color="secondary">
              Dismiss
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Typography variant="h6">Outlined</Typography>
        <Card variant="outlined" className={classes.rootSimple}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
            <Button size="small" color="primary-alt">
              Save
            </Button>
            <Button size="small" color="secondary">
              Dismiss
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Typography variant="h6">Complex</Typography>
        <Card className={classes.rootComplex}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Design for Healthcare Improvement"
            subheader="July 18, 2022"
          />
          <CardMedia
            className={classes.media}
            image="https://cashmere.healthcatalyst.net/assets/logos/StackedLogo(white).svg"
            title="Health Catalyst"
          />
          <CardContent>
            <Typography variant="body2" color="textPrimary" component="p">
              Cashmere is Health Catalyst’s comprehensive design system. As we
              deliver digital content across a wide range of platforms and
              modalities, we strive to deliver a meaningful, consistent, and
              delightful experience.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                The foundations of the Cashmere Design System are universal
                brand guidelines that all our digital content should follow.
              </Typography>
              <Typography paragraph>
                But Cashmere isn’t only a design system, it’s also an
                open-source React component library. Everything under the Web
                Apps tab is meant for you. Take a look at our developer guides
                to get started incorporating Cashmere into your project.
                Although Angular is our preferred framework, you can leverage
                Cashmere’s stylesheets in any web app - even the most basic HTML
                site. And get involved! All developers are welcome to contribute
                code or improvement ideas to the library via our GitHub project.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Grid>
  );
}
