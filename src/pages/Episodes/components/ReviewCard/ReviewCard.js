import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "./ReviewCard.module.css";

const useStyles = makeStyles((theme) => ({
  header: {
    minHeight: "70px",
    padding: "0 16px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  content: {
    padding: "0 10px",
    minHeight: "100px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    padding: 0,
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#d15700",
  },
}));

export const ReviewCard = ({
  name,
  air_date,
  director,
  writer,
  characters,
  img_url,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            classes={{ root: styles.avatar }}
          >
            {name[0]}
          </Avatar>
        }
        title={name}
        subheader={air_date}
      />
      <CardMedia className={classes.media} image={img_url} title={name} />
      <CardContent className={classes.content}>
        <ul className={styles.list}>
          <li>
            <strong>Director: </strong>
            {director}
          </li>
          <li>
            <strong>Writer: </strong>
            {writer}
          </li>
          <li>
            <strong>Status: </strong>
          </li>
        </ul>
      </CardContent>
      <CardActions disableSpacing>
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
          {characters.length > 0 && (
            <>
              <Typography paragraph>
                <strong>Abilities:</strong>
              </Typography>
              <ul>
                {characters.map((char) => {
                  return <li key={char}>{char}</li>;
                })}
              </ul>
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
};
