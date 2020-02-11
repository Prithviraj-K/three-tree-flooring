import React from 'react';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
            <Grid 
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{minHeight: "100vh"}}
            >
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            Login
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;