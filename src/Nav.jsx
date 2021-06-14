import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#000000",
  },
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Quiero Programar !
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            className={classes.menuButton}
          >
            Info
          </Button>
          <Button color="primary" variant="outlined">
            Contacto
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
