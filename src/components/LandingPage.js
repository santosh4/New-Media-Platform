import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import LandingPageCss from "./css/LandingPageCss";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SignUp from "./SignUp";
import Login from "./Login";

function LandingPage() {
  const [open, setOpen] = React.useState(false);
  const [Sopen, SsetOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const ShandleClickOpen = () => {
    SsetOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const ShandleClose = () => {
    SsetOpen(false);
  };

  const classes = LandingPageCss();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
              <Typography className={classes.title} variant="h6" noWrap>
                New Media
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
              <Button color="primary" onClick={handleClickOpen}>
                Login
              </Button>
              <Button color="primary" onClick={ShandleClickOpen}>
                Sign Up
              </Button>
              <SignUp
                open={Sopen}
                setOpen={SsetOpen}
                handleClickOpen={ShandleClickOpen}
                handleClose={ShandleClose}
              />
              <Login
                open={open}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} className={classes.Input}>
        <TextField
          className={classes.InputBox}
          id="outlined-textarea"
          label="Editorial Board"
          placeholder="Please create your stories here ......."
          multiline
          rows="15"
          variant="outlined"
        />
      </Grid>
    </div>
  );
}

export default LandingPage;
