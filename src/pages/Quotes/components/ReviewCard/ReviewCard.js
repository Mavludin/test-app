import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";

import styles from "./ReviewCard.module.css";
import CardContent from "@material-ui/core/CardContent";

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

export const ReviewCard = ({ by, image, quote }) => {
  const classes = useStyles();
  return (
    <Card classes={{ root: styles.root }} className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            classes={{ root: styles.avatar }}
          >
            {by[0]}
          </Avatar>
        }
        title={by}
      />
      <CardMedia className={classes.media} image={image} title={by} />
      <CardContent
        classes={{ root: styles.content }}
        className={classes.content}
      >
        <h3>Quote:</h3>
        <p>
          <i>{quote}</i>
        </p>
      </CardContent>
    </Card>
  );
};
