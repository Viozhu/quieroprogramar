import React, { useState } from "react";
import questionsObjs from "./QuestionsObj";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Paper,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(0, 3),
      justifyContent: "center",
    },
    root: { textAlign: "center", maxWidth: "50rem", margin: "4rem" },
    rootMovile: {
      textAlign: "center",
      maxWidth: "50rem",
      margin: "1rem",
      marginTop: "2rem",
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
    action: {
      justifyContent: "space-around",
      marginBottom: "1rem",
    },
    paper: {
      display: "flex",
      justifyContent: "center",
      maxWidth: "20rem",
      maxHeight: "20%",
      margin: "auto",
      alignItems: "center",
    },
  })
);

export default function Questions() {
  const [num, setNum] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);

  const classes = useStyles();
  const matches = useMediaQuery("(max-width:768px)");

  const tryAgain = (): void => {
    setNum(0);
    setPoints(0);
  };

  const anwser = (awnser: boolean): void => {
    let res = questionsObjs.filter((x) => x.id === num);
    if (awnser) {
      Swal.fire({
        title: "Correcto",
        icon: "success",
        text: res[0].awnser,
      });
      setPoints(points + 5);
    } else {
      Swal.fire({
        title: "Ups,es incorrecto",
        icon: "error",
        text: res[0].awnser,
      });
    }

    setNum(num + 1);
  };

  return (
    <>
      <div className={classes.card}>
        <div>
          <Card className={matches ? classes.rootMovile : classes.root}>
            {questionsObjs
              .filter((f) => f.id === num)
              .map((x) => (
                <>
                  <Typography variant="h5">{x.id + 1}/20</Typography>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {x.question}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      style={{ marginTop: "10px" }}
                    >
                      {x.text}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.action}>
                    <Button
                      onClick={() => anwser(x.option)}
                      style={{ background: "green", color: "#fff" }}
                      variant="contained"
                    >
                      ✔
                    </Button>
                    <Button
                      onClick={() => anwser(x.optionTwo)}
                      color="secondary"
                      variant="contained"
                    >
                      ✗
                    </Button>
                  </CardActions>
                </>
              ))}
          </Card>
          <Paper className={classes.paper}>
            <Typography variant="h5" style={{ margin: "1rem" }}>
              Total Points: {points}
            </Typography>
          </Paper>
          {questionsObjs.filter((f) => f.id === num).length !== 0 ? (
            ""
          ) : (
            <Button
              color="primary"
              onClick={tryAgain}
              variant="contained"
              className={classes.paper}
              style={{ margin: "1rem" }}
            >
              ¡ Intenta de Nuevo !
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
