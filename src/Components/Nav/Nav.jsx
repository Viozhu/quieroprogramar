import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(),
  },
  title: {
    flexGrow: 1,
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
          <Typography variant="h6" className={classes.title} color="primary">
            <Button to="/home" color="primary">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <DesktopWindowsIcon />
              </IconButton>
              Quiero Programar !
            </Button>
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
