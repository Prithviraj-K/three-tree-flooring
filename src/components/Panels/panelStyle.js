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
    imgCent: {
        width: "100%",
        height: "auto"
    },
    imgLeft: {
        maxWidth: "100%",
        maxHeight: "100%"
    },
    gridLeft: {
        width: "100%",
        height: "100%"
    },
    panelTitle: {
        textAlign: "center", 
        marginTop: "-3em", 
        letterSpacing: "5px", 
        color: "white",
        fontWeight: "lighter"
    },
    '@media (max-width: 1280px)': {
        imgCent: {
            width: "100%",
            height: "auto"
        }
    },
    '@media (max-width: 960px)': {
        imgCent: {
            width: "75%",
            height: "auto"
        }
    },
    '@media (max-width: 600px)': {
        imgLeft: {
            width: "100%",
            height: "auto",
        },
        panelTitle: {
            marginBottom: "2em"
        },
        imgCent: {
            width: "60%",
            height: "auto",
            margin: "0"
        }
    },
};

export default panelStyle;