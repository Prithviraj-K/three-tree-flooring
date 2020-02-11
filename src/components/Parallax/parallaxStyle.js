const parallaxStyle = {
  parallax: {
    height: "95vh",
    width: "100vw",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  },
  imgText: {
    color: "rgba(255,255,255,0.8)",
    marginLeft: "10vw",
    marginTop: "70vh"
  },
  '@media (max-width: 770px)': {
    parallax: {
      height: "65vh",
    }
  }
};

export default parallaxStyle;
