import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

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
    padding: "10px",
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

export const ReviewCard = ({ name, type, inhabitants, img_url }) => {
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
            {name[0]}
          </Avatar>
        }
        title={name}
        subheader={type}
      />
      <CardMedia className={classes.media} image={img_url} title={name} />
      <CardContent
        classes={{ root: styles.content }}
        className={classes.content}
      >
        {inhabitants.length > 0 ? (
          <>
            <strong>Inhabitants:</strong>
            <ul>
              {inhabitants.map((inhabitant) => {
                return <li key={inhabitant}>{inhabitant}</li>;
              })}
            </ul>
          </>
        ) : (
          <h4>No inhabitants</h4>
        )}
      </CardContent>
    </Card>
  );
};
