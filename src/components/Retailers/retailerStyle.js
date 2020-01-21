const retailerStyle = {
    gridItem: {
        textAlign: "center",
        alignItems: "center"
    },
    gridPaper: {
        margin: "1em",
        padding: "1em",
        boxShadow: "0 4px 20px -12px rgba(0,0,0,0.8) !important",
        "&:hover": {
        boxShadow: "0 8px 40px -12.125px rgba(0,0,0,0.8) !important"
        },
        borderRadius: "1em"
    },
    location: {
        marginTop: "0.5em"
    },
    retailTitle: {
        fontWeight: "bold"
    },
    divide: {
        width: "85%",
        margin: "auto",
        marginBottom: "1em"
    },
    mapGrid: {
        height: "70vh"
    },
    allRetailDiv: {
        height: "70vh", 
        overflowY: "scroll",
        scrollbarColor: "dark"
    },
    addressText: {
        padding: "1em 2em",
        paddingBottom: "1em",
        fontWeight: "bold"
    },
    contactBtn: {
        marginLeft: "4em",
        width: "20vw",
        height: "8vh"
    },
    '@media (max-width: 1279px)': {
        allRetailDiv: {
          height: "100%",
          overflow: "visible",
          marginTop: "2em",
        },
        addressText: {
            padding: "1em",
            paddingBottom: "0",
            height: "100%",
            fontSize: "1.5em",
            textAlign: "center",
            marginBottom: "1em"
        },
        mapGrid: {
            marginRight: "2em"
        },
        contactBtn: {
            display: "block", 
            margin: "0 auto",
            width: "80%",
            height: "100%"
        }
    },
};

export default retailerStyle;