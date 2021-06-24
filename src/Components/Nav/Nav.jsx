import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import { NavLink } from "react-router-dom";

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
  removelink: { textDecoration: "none", color: "rgb(132, 58, 195)" },
}));

export default function Nav() {
  const matches = useMediaQuery("(max-width:768px)");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="primary">
            <Button color="primary">
              <NavLink to="/" className={classes.removelink}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <DesktopWindowsIcon />
                </IconButton>
                {matches ? "" : "Quiero Programar !"}
              </NavLink>
            </Button>
          </Typography>

          <Button
            color="primary"
            variant="outlined"
            className={classes.menuButton}
          >
            <NavLink to="/info" className={classes.removelink}>
              Info
            </NavLink>
          </Button>
          <Button color="primary" variant="outlined">
            <NavLink to="/contact" className={classes.removelink}>
              Contacto
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
