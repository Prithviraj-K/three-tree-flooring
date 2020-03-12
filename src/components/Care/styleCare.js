const styleCare = {
    divFull: {
        backgroundColor: "#889696", 
        overflow: "hidden"
    },
    sectionTop: {
        minHeight: "400px",
        margin: "6em auto 2em auto"
    },
    engTitle: {
        margin: "auto", 
        width: "15em", 
        marginBottom: "2em", 
        padding: "1em", 
        textAlign: "center", 
        backgroundColor: "black"
    },
    layerImg: {
        height: "400px", 
        verticalAlign: "middle", 
        justify: "center"
    },
    titleEng: {
        color: "white"
    },
    titleDivide:{
        margin: "auto", 
        marginBottom: "2em", 
        width: "30%", 
        backgroundColor: "#000000"
    },
    '@media (max-width: 960px)': {
        layerImg: {
            width: "80%",
            margin: "auto",
            height: "auto"
        },
        sectionTop: {
            height: "auto",
            minHeight: "300px"
        }
    },
    '@media (max-width: 600px)': {
      layerImg:{
        width: "100%",
        height: "auto"
      },
      sectionTop: {
        height: "auto",
        minHeight: "250px"
      },
      titleDivide: {
        width: "80%"
      }
    }
};

export default styleCare;