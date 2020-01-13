const retailerStyle = {
    gridItem: {
        textAlign: "center",
        alignItems: "center"
    },
    gridPaper: {
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
        height: "90vh"
    },
    allRetailDiv: {
        height: "80vh", 
        overflowY: "scroll",
    },
    addressText: {
        padding: "1.5em"
    },
    '@media (max-width: 1279px)': {
        allRetailDiv: {
          height: "100%",
          overflow: "visible",
          marginTop: "2em",
        },
        addressText: {
            padding: "1em",
            height: "100%",
            fontSize: "1em",
            textAlign: "center",
            marginBottom: "1em"
        }
    },
};

export default retailerStyle;