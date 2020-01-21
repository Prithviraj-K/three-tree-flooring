import React from 'react';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Typography from '@material-ui/core/Typography';

const logoBlack = require('../../assets/img/logo-black-large.png');

const Login = () => {
    return (
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                logoC={logoBlack}
                color="white"
            />
            <div style={{textAlign: "center", position: "absolute", top: "50%", marginTop: "5em", width: "100%", height: "100vh"}}>
                <Typography variant="h1">
                    Login
                </Typography>
            </div>
        </div>
    );
}

export default Login;