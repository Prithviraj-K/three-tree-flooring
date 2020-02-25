import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions';
import { withStyles } from "@material-ui/styles";

import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '../../assets/img/google-login.png';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ReactCardFlip from 'react-card-flip';

import imgBg from '../../assets/img/wet-wood.jpg';


const styles = () => ({
    containerGrid: {
        minHeight: "100vh",
        marginTop: "1em"
    },
    loginCard: {
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.8) !important",
        borderRadius: "2em",
        width: "30vw"
    },
    textCard: {
        textAlign: "center",
        marginTop: "1em"
    },
    formCard: {
        width: "100%",
        marginTop: "2em"
    },
    textfieldCard: {
        width: "90%",
        margin: "1em auto"
    },
    btnCard: {
        width: "40%",
        height: "3em",
        margin: "0 auto",
        border: "1px solid black"
    },
    loginBtn: {
        marginTop: "0.33em",
        padding: "1em 1em"
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
    registerStyle: {

    },
    incorrectTxt: {
        textAlign: "center",
        color: "red"
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
});


const logoBlack = require('../../assets/img/logo-white.png');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(event) {
        event.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    state = { email: "", password: "", signEmail: "", signPassword: "", confirmPassword: "" };

    handleEmailChange = ({ target }) => {
        this.setState({ email: target.value });
    };

    handlePasswordChange = ({ target }) => {
        this.setState({ password: target.value });
    };

    handleSignEmailChange = ({ target }) => {
        this.setState({ signEmail: target.value });
    };

    handleSignPasswordChange = ({ target }) => {
        this.setState({ signPassword: target.value });
    };

    handleConfirmPasswordChange = ({ target }) => {
        this.setState({ confirmPassword: target.value });
    };

    handleSubmit = () => {
        const { dispatch } = this.props;
        const { email, password } = this.state;
        dispatch(loginUser(email, password));
    };

    render() {
        const { classes, loginError, isAuthenticated } = this.props;

        if (isAuthenticated) {
            return <Redirect to="/Profile" />;
        }
        else {
            return (
                <Fade>
                    <div style={{ backgroundImage: `url(${imgBg})`, backgroundSize: "cover", overflow: "hidden" }}>
                        <Header
                            rightLinks={<HeaderLinks />}
                            fixed
                            logoC={logoBlack}
                            color="transparent"
                        />
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                            className={classes.containerGrid}
                        >
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Jump>
                                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                                        <Card className={classes.loginCard}>
                                            <CardContent className={classes.textCard}>
                                                <Typography variant="h5">
                                                    Welcome Back
                                                </Typography>
                                            </CardContent>
                                            <Divider style={{width: "95%", margin: "0em auto"}}/>
                                            <FormControl className={classes.formCard}>
                                                <TextField
                                                    className={classes.textfieldCard}
                                                    id="outlined-basic"
                                                    label="Email"
                                                    variant="outlined"
                                                    onChange={this.handleEmailChange}
                                                />
                                                <TextField
                                                    className={classes.textfieldCard}
                                                    id="outlined-basic"
                                                    label="Password"
                                                    variant="outlined"
                                                    type="password"
                                                    onChange={this.handlePasswordChange}
                                                />
                                                {loginError && (
                                                    <Typography component="p" className={classes.incorrectTxt}>Passwords don't match</Typography>
                                                )}
                                                <Button className={classes.btnCard} onClick={this.handleSubmit}>
                                                    Login
                                                </Button>
                                            </FormControl>
                                            <div className={classes.divBtn}>
                                                <Button color="primary" className={classes.loginBtn}>
                                                    <FacebookIcon style={{ paddingRight: "0.5em" }} />
                                                    Continue with Facebook
                                                </Button>
                                            </div>
                                            <div className={classes.divBtn} style={{ marginBottom: "1.5em" }}>
                                                <Button className={classes.loginBtn}>
                                                    <img className={classes.googleBtn} src={GoogleIcon} alt="Google" /> Sign in with Google
                                                </Button>
                                            </div>
                                            <div style={{ textAlign: "center" }}>
                                                <Typography variant="body" style={{ textAlign: "center" }}>
                                                    Don't have an account?
                                                </Typography>
                                            </div>
                                            <div style={{ textAlign: "center", marginBottom: "2em" }}>
                                                <Button className={classes.btnCard} onClick={this.handleClick}>
                                                    Register
                                                </Button>
                                            </div>
                                        </Card>
                                        <Card className={classes.loginCard}>
                                            <CardContent className={classes.textCard}>
                                                <Typography variant="h5">
                                                    <KeyboardBackspaceIcon onClick={this.handleClick} style={{float: "left"}}/>
                                                    Register Now
                                                </Typography>
                                                <Divider style={{marginTop: "1em"}}/>
                                                <FormControl className={classes.formCard}>
                                                <TextField
                                                    className={classes.textfieldCard}
                                                    id="outlined-basic"
                                                    label="Email"
                                                    variant="outlined"
                                                    onChange={this.handleSignEmailChange}
                                                />
                                                <TextField
                                                    className={classes.textfieldCard}
                                                    id="outlined-basic"
                                                    label="Password"
                                                    variant="outlined"
                                                    type="password"
                                                    onChange={this.handleSignPasswordChange}
                                                />
                                                <TextField
                                                    className={classes.textfieldCard}
                                                    id="outlined-basic"
                                                    label="Confirm Password"
                                                    variant="outlined"
                                                    type="password"
                                                    onChange={this.handleConfirmPasswordChange}
                                                />
                                                {(this.state.signPassword != this.state.confirmPassword) && (
                                                    <Typography component="p" className={classes.incorrectTxt}>Passwords don't match</Typography>
                                                )}
                                                <Button className={classes.btnCard}>
                                                    Sign Up
                                                </Button>
                                            </FormControl>
                                            </CardContent>
                                        </Card>
                                    </ReactCardFlip>
                                </Jump>
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default withStyles(styles)(connect(mapStateToProps)(Login));