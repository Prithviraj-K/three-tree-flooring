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
        width: "90%",
        height: "auto"
    },
    gridLeft: {
        width: "100%",
        height: "80vh"
    },
    panelTitle: {
        textAlign: "center", 
        marginTop: "-3em", 
        letterSpacing: "3px", 
        color: "white",
        fontWeight: "lighter"
    },
    '@media (max-width: 1279px)': {
        gridLeft: {
            width: "auto",
            height: "80vh"
        },
        imgLeft: {
            width: "90",
            height: "auto"
        },
        panelTitle: {
            marginTop: "-5em"
        }
    },
};

export default panelStyle;