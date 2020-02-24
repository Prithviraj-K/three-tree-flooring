const styleLogin = {
    containerGrid: {
        minHeight: "100vh"
    },
    loginCard: {
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.8) !important",
        borderRadius: "2em",
        width: "30vw",
        padding: "2em"
    },
    textCard: {
        textAlign: "center",
        marginTop: "1em"
    },
    dividerText: {
        width: "40%",
        margin: "0em auto 1em auto"
    },
    formCard: {
        width: "100%",
    },
    textfieldCard: {
        width: "90%",
        margin: "1em auto"
    },
    btnCard: {
        width: "40%",
        height: "3em",
        margin: "1em auto 0 auto",
        border: "1px solid black"
    },
    loginBtn: {
        marginTop: "0.33em",
        padding:"1em 1em"
    },
    divBtn: {
        width: "100%",
        height: "3em",
        alignContent: "center",
        margin: "auto",
        justify: "center",
        textAlign: "center"
    },
    googleBtn: {
        height: "1.5em",
        paddingRight: "1em"
    },
    '@media (max-width: 1280px)': {
        loginCard: {
            width: "50vw",
        },
        btnCard: {
            width: "50%"
        }
    },
    '@media (max-width: 960px)': {
        loginCard: {
            width: "60vw",
        },
        btnCard: {
            width: "60%"
        }
    },
    '@media (max-width: 600px)': {
        loginCard: {
            width: "80vw",
            padding: "0.7em"
        },
        btnCard: {
            width: "70%"
        }
    }
}

export default styleLogin;