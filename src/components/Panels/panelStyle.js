const panelStyle = {
    divBody: {
        width: "100%",
        height: "100%",
        backgroundAttachment: "fixed",
        paddingBottom: "2em"
    },
    titlePad: {
        paddingTop: "2em",
        textAlign: "center"
    },
    subPad: {
        textAlign: "center",
        marginBottom: "0"
    },
    dividerT: {
        margin: "auto",
        marginBottom: "2em",
        width: "20%",
        backgroundColor: "#000000"
    },
    gridCont: {
        margin: "0",
        marginBottom: "2em",
        width: "100%"
    },
    imgLeft: {
        width: "100%",
        height: "100%"
    },
    gridLeft: {
        height: "90vh",
    },
    panelTitle: {
        textAlign: "center", 
        marginTop: "-3em", 
        letterSpacing: "10px", 
        color: "white"
    },
    '@media (max-width: 1279px)': {
        gridLeft: {
            width: "100%",
            height: "80vh"
        },
        imgLeft: {
            width: "100%",
            height: "100%"
        }
    },
};

export default panelStyle;