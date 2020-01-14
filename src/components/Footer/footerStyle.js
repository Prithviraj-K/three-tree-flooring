import { container, primaryColor } from "../../assets/img/jss/material-react.js";

const footerStyle = theme => ({
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    paddingLeft: "2em ",
    paddingRight: "2em",
    margin: "0",
    textAlign: "right"
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    backgroundColor: "rgba(255,255,255,0.5)"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  '@media (max-width: 1300px)': {
    right: {
      textAlign: "center",
      paddingTop: "5em"
    }
  },
  '@media (max-width: 770px)': {
    right: {
      paddingTop: "10em"
    }
  }
});
export default footerStyle;
