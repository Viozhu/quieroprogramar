import React from "react";
import { NavLink } from "react-router-dom";
import Waves from "./../Waves/Waves";
import {
  Grid,
  Divider,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(1),
    alignContent: "center",
  },
  rootCard: {
    maxWidth: 345,
    margin: theme.spacing(3),

    border: "7px solid #ffff",
    height: 420,
  },
  media: {
    height: 170,
    borderRadius: 5,
  },
  text: {
    color: "rgb(132, 58, 195)",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
  },
  home: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    height: "50vh",
    margin: "auto",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.btn}>
        <Typography variant="h2" className={classes.text}>
          ⇝  
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          style={{ border: "3px solid #ffff" }}
        >
          <NavLink
            to="/questions"
            style={{ textDecoration: "none", color: "rgb(132, 58, 195)" }}
          >
            <Typography
              variant="h4"
              align="center"
              color="primary"
              className={classes.text}
            >
              ¡ Front End Quizz !
            </Typography>
          </NavLink>
        </Button>
        <Typography variant="h2" className={classes.text}>
            ⇜
        </Typography>
      </div>
      <div className={classes.home}>
        <Grid container className={classes.root}>
          <Grid item xs={3}>
            <Card className={classes.rootCard}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                    style={{ height: "4rem" }}
                  >
                    Facil de aprender
                  </Typography>
                  <Divider />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <br />
                    Resulta ser, que contrario a lo que muchos podrán pensar,
                    las computadoras son extremadamente tontas, sin embargo,
                    también resulta ser que son buenísimas para seguir órdenes.
                    Solo debes dar las ordenes.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.rootCard}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                    style={{ height: "4rem" }}
                  >
                    Divertido
                  </Typography>
                  <Divider />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <br />
                    Sabiendo programación además entendés cómo funciona tu
                    computadora y cómo reacciona cada programa a las órdenes que
                    vos le das. Te convertís en una persona con una habilidad
                    única: la de crear cosas.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.rootCard}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1583435272989-830f04a4a20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                    style={{ height: "4rem" }}
                  >
                    Te prepara para el futuro
                  </Typography>
                  <Divider />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <br />
                    La programación es el trabajo del futuro, ya que el
                    desarrollo de software y web es imprescindible para que los
                    sectores laborales den el salto a la transformación digital.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Waves />
    </>
  );
}
