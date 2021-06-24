import React from "react";
import { Card, CardContent, Container, Typography } from "@material-ui/core";

export default function Info() {
  let web1: string =
    "https://www2.deloitte.com/es/es/pages/technology/articles/que-es-react-native.html";
  let web2: string =
    "https://es.bitdegree.org/tutoriales/preguntas-entrevista-react-js/";

  let web3: string = "https://github.com/sudheerj/reactjs-interview-questions";
  return (
    <div>
      <Container maxWidth="md">
        <Card
          style={{
            textAlign: "center",
            marginTop: "10%",
            padding: "1.5rem",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h5" style={{ color: "rgb(132, 58, 195)" }}>
            Quiero Programar
          </Typography>
          <CardContent>
            <Typography style={{ color: "#ffff" }}>
              Quiero Programar es una web destinada a todos esos programadores
              que recien estan iniciando en este mundo de la programación.
              <br />
              Es basicamente un quizz con preguntas teoricas que muchas veces
              son preguntadas en entrevistas laborales del Front-End.
              <br /> Son preguntas orientadas a lo que es react y todo su
              ambito.
              <br />
              <br /> La Fuente de la informacion completa esta en los siguientes
              links:
              <br />
              <br />
              <a href={web1} target="_blank" rel="noreferrer">
                Deloitte.
              </a>{" "}
                 
              <a href={web2} target="_blank" rel="noreferrer">
                Bitdegree
              </a>{" "}
                 
              <a href={web3} target="_blank" rel="noreferrer">
                GitHub - sudheerj
              </a>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
