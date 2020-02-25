import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions';
import { registerUser } from '../../actions';

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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ReactCardFlip from 'react-card-flip';

import imgBg from '../../assets/img/wet-wood.jpg';


const styles = () => ({
    containerGrid: {
        minHeight: "100vh",
        marginTop: "1em"
    },
    loginCard: {
        boxShadow: "20px 20px 40px 30px rgba(0,0,0,0.6) !important",
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
        margin: "0 auto"
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
        this.handleFlipClick = this.handleFlipClick.bind(this);
    };

    handleFlipClick(event) {
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

    handleRegister = () => {
        const { dispatch } = this.props;
        const { signEmail, signPassword } = this.state;
        dispatch(registerUser(signEmail, signPassword));
    };

    isLoginFormValid = () => {
        const { email, password } = this.state;
        return email, password;
    };

    isRegisterFormValid = () => {
        const { signEmail, signPassword, confirmPassword } = this.state;
        return signEmail, signPassword, confirmPassword;
    };

    render() {
        const { classes, loginError, isAuthenticated, registerError } = this.props;

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
                                            <Divider style={{ width: "95%", margin: "0em auto" }} />
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
                                                    id="outlined-basic-1"
                                                    label="Password"
                                                    variant="outlined"
                                                    type="password"
                                                    onChange={this.handlePasswordChange}
                                                />
                                                {loginError && (
                                                    <Typography component="p" className={classes.incorrectTxt}>Incorrect email or password</Typography>
                                                )}
                                                <Button disabled={!this.isLoginFormValid()} className={classes.btnCard} onClick={this.handleSubmit}>
                                                    Login
                                                </Button>
                                            </FormControl>
                                            <div className={classes.divBtn}>
                                                <Button disabled color="primary" className={classes.loginBtn}>
                                                    <FacebookIcon style={{ paddingRight: "0.5em" }} />
                                                    Continue with Facebook
                                                </Button>
                                            </div>
                                            <div className={classes.divBtn}>
                                                <Button disabled className={classes.loginBtn}>
                                                    <img className={classes.googleBtn} src={GoogleIcon} alt="Google" /> Sign in with Google
                                                </Button>
                                            </div>
                                            <div style={{float: "right", margin: "1em"}}>
                                                <div style={{marginTop: "0.5em", textAlign: "center" }}>
                                                    <Typography variant="body1" style={{ textAlign: "center" }}>
                                                        Don't have an account?
                                                    </Typography>
                                                </div>
                                                <div style={{ textAlign: "center"}}>
                                                    <Button  onClick={this.handleFlipClick}>
                                                        Register
                                                    <ArrowForwardIcon />
                                                    </Button>
                                                </div>
                                            </div>
                                        </Card>
                                        <Card className={classes.loginCard}>
                                            <CardContent className={classes.textCard} style={{ margin: "2em 0" }}>
                                                <Typography variant="h5">
                                                    Register Now
                                                </Typography>
                                                <Divider style={{ marginTop: "1em" }} />
                                                <FormControl className={classes.formCard} >
                                                    <TextField
                                                        className={classes.textfieldCard}
                                                        id="outlined-basic-2"
                                                        label="Email"
                                                        variant="outlined"
                                                        onChange={this.handleSignEmailChange}
                                                    />
                                                    <TextField
                                                        className={classes.textfieldCard}
                                                        id="outlined-basic-3"
                                                        label="Password"
                                                        variant="outlined"
                                                        type="password"
                                                        onChange={this.handleSignPasswordChange}
                                                    />
                                                    <TextField
                                                        className={classes.textfieldCard}
                                                        id="outlined-basic-4"
                                                        label="Confirm Password"
                                                        variant="outlined"
                                                        type="password"
                                                        onChange={this.handleConfirmPasswordChange}
                                                    />
                                                    {registerError && (
                                                        <Typography component="p" className={classes.incorrectTxt}>Invalid Email or Password</Typography>
                                                    )}
                                                    {(this.state.signPassword !== this.state.confirmPassword) && (
                                                        <Typography component="p" className={classes.incorrectTxt}>Passwords don't match</Typography>
                                                    )}
                                                    <Button
                                                        disabled={!this.isRegisterFormValid()}
                                                        className={classes.btnCard}
                                                        onClick={this.handleRegister}
                                                    >
                                                        Sign Up
                                                    </Button>
                                                </FormControl>
                                                <Button  onClick={this.handleFlipClick} style={{margin: "2em", float: "left"}}>
                                                    <ArrowBackIcon/>
                                                    Back
                                                </Button>
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
        isAuthenticated: state.auth.isAuthenticated,
        registerError: state.auth.registerError
    };
}

export default withStyles(styles)(connect(mapStateToProps)(Login));