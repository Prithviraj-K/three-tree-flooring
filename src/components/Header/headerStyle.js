import {
    container,
    defaultFont,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    transition,
    drawerWidth
  } from "../../assets/img/jss/material-react.js";
  
  const headerStyle = {
    appBar: {
      display: "flex",
      border: "0",
      borderRadius: "3px",
      padding: "0.625rem 0",
      marginBottom: "20px",
      color: "#555",
      width: "100%",
      backgroundColor: "#fff",
      transition: "all 150ms ease 0s",
      alignItems: "center",
      flexFlow: "row nowrap"
    },
    absolute: {
      position: "absolute"
    },
    fixed: {
      position: "fixed"
    },
    container: {
      ...container,
      flex: "1",
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      flexWrap: "nowrap"
    },
    flex: {
      flex: 1
    },
    title: {
      ...defaultFont,
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      color: "inherit",
      padding: "8px 16px",
      textAlign: "center",
      letterSpacing: "unset",
      "&:hover,&:focus": {
        color: "inherit",
        background: "transparent"
      }
    },
    appResponsive: {
      margin: "20px 10px"
    },
    primary: {
      backgroundColor: primaryColor,
      color: "#FFFFFF",
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"
    },
    info: {
      backgroundColor: infoColor,
      color: "#FFFFFF",
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)"
    },
    success: {
      backgroundColor: successColor,
      color: "#FFFFFF",
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)"
    },
    warning: {
      backgroundColor: warningColor,
      color: "#FFFFFF",
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)"
    },
    danger: {
      backgroundColor: dangerColor,
      color: "#FFFFFF",
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)"
    },
    rose: {
      backgroundColor: "transparent !important",
      color: "#000000",
      boxShadow:
        "none"
    },
    transparent: {
      backgroundColor: "transparent !important",
      backdropFilter: "blur(7px)",
      boxShadow: "none",
      color: "#FFFFFF"
    },
    dark: {
      backgroundColor: "black",
      color: "#FFFFFF"
    },
    white: {
      color: "#000000",
      backdropFilter: "blur(7px)",
      backgroundColor: "transparent !important",
      boxShadow: "none"
    },
    drawerPaper: {
      border: "none",
      bottom: "0",
      transitionProperty: "top, bottom, width",
      transitionDuration: ".2s, .2s, .35s",
      transitionTimingFunction: "linear, linear, ease",
      width: drawerWidth,
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      ...transition
    },
    linkBtn: {
      margin: "0",
      padding: "0"
    },
    navLink: {
      margin: "0",
      padding: "0"
    }
  };
  
  export default headerStyle;
  