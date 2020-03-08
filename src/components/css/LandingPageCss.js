import { fade, makeStyles } from "@material-ui/core/styles";

const LandingPageCss = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#c2d6d6"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "absolute",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: "0px",
    width: "auto"
    // [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(1),
    //   width: "auto"
    // }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  Input: {
      paddingTop:"32px",
      paddingLeft:"20px",
      paddingRight: "20px"
  },
  InputBox: {
    width: "100%",
    paddingTop: "1%"
  },
  CloseIcon: {
      paddingTop:"8px"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 300,
      "&:focus": {
        width: 400
      }
    }
  }
}));
export default LandingPageCss;
