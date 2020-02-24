import React from 'react';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '../../assets/img/google-login.png';
import Jump from 'react-reveal/Jump';

import fbLogin from '../../assets/img/fb-login.png';

//styles
import { makeStyles } from '@material-ui/core';
import styles from './styleLogin';
const useStyles = makeStyles(styles);


const logoBlack = require('../../assets/img/logo-white.png');

const Login = () => {

    const classes = useStyles();
    return (
        <div>
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
                        <Card className={classes.loginCard}>
                            <CardContent className={classes.textCard}>
                                <Typography variant="h5">
                                    Welcome Back
                                </Typography>
                            </CardContent>
                            <Divider className={classes.dividerText} />
                            <FormControl className={classes.formCard}>
                                <TextField
                                    className={classes.textfieldCard}
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                />
                                <TextField
                                    className={classes.textfieldCard}
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                />
                                <Button className={classes.btnCard}>
                                    Login
                                </Button>
                            </FormControl>
                            <div className={classes.divBtn}>
                                <Button color="primary" className={classes.loginBtn}>
                                    <FacebookIcon style={{paddingRight: "0.5em"}}/>
                                    Continue with Facebook
                                </Button>
                            </div>
                            <div className={classes.divBtn}>
                                <Button className={classes.loginBtn}>
                                    <img className={classes.googleBtn} src={GoogleIcon} alt="Google"/> Sign in with Google
                                </Button>
                            </div>
                        </Card>
                    </Jump>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;