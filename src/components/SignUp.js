import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import LandingPageCss from "./css/LandingPageCss";

export default function SignUp(props) {
  const classes = LandingPageCss();
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Grid container>
          <Grid item xs={10}>
            <DialogTitle id="form-dialog-title">
              Sign Up Credentials
            </DialogTitle>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={props.handleClose} color="primary">
              <CloseIcon className={classes.CloseIcon} />
            </Button>
          </Grid>
        </Grid>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="password"
            type="password"
            fullWidth
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Sign UP
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
