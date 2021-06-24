import React from "react";
import Card from "card-vibes";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5%",
  },
  title: {
    color: "rgb(132, 58, 195)",
    textAlign: "center",
  },
  img: {
    borderRadius: "50%",
    width: 180,
    marginTop: "2rem",
  },
  body: { display: "flex" },
  text: { padding: "2rem", textAlign: "center" },
  icon: { width: "3rem", height: "3rem" },
  icons: { display: "flex", justifyContent: "space-around" },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Card
          style={{
            width: "600px",
            height: "23rem",
            padding: "20px",
          }}
        >
          <div>
            <Typography variant="h4" className={classes.title}>
              Jorge Ignacio Garay
            </Typography>
            <div className={classes.body}>
              <div className={classes.text}>
                <Typography variant="body1" style={{ color: "#fff" }}>
                  Diseñador web y desarrollador Full-Stack, amante del
                  front-end. Me forme en Henry como desarrollador Full-stack,
                  creando proyectos que fueran reales y complejo. Además, el
                  bootcamp mejoró enormemente mis relaciones interpersonales.
                  habilidades y me dio la oportunidad de enseñar a estudiantes
                  principiantes.
                </Typography>
              </div>
              <div>
                <img
                  className={classes.img}
                  src="https://avatars.githubusercontent.com/u/76756295?v=4"
                  alt="pic"
                />
              </div>
            </div>
            <div className={classes.icons}>
              <a
                href="https://www.linkedin.com/in/jorgeignaciogaray/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className={classes.icon}
                  src="https://raw.githubusercontent.com/Viozhu/Viozhu/main/iconos/linkedin.png"
                  alt="in"
                />
              </a>{" "}
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=garayjorgeignacio@gmail.com&tf=cm"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className={classes.icon}
                  src="https://raw.githubusercontent.com/Viozhu/Viozhu/main/iconos/gmail.png"
                  alt="mail"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5493434592663&text=Hi%21+I+saw+your+portafolio&app_absent=0"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className={classes.icon}
                  src="https://raw.githubusercontent.com/Viozhu/Viozhu/main/iconos/whatsapp.png"
                  alt="whsp"
                />
              </a>
              <a
                href="https://viozhu.github.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className={classes.icon}
                  src="https://raw.githubusercontent.com/Viozhu/Viozhu/main/iconos/web.png"
                  alt="web"
                />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
