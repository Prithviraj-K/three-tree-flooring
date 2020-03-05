import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import UserInformation from './UserInformation';
import UserMenu from './UserMenu.js';
import Grid from '@material-ui/core/Grid';

import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Footer from '../Footer/Footer';

import { makeStyles } from "@material-ui/core/styles";
import styles from './styleProfile';

const useStyles = makeStyles(styles);

const logoBlack = require('../../assets/img/logo-black-large.png');

const Profile = () => {
        const classes = useStyles();
        return (
            <div>
                <Header
                    rightLinks={<HeaderLinks />}
                    absolute
                    logoC={logoBlack}
                    color="white"
                />
                <div className={classes.divBG}>
                    <Grid
                        container
                        spacing={1}
                    >
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <UserInformation />
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                            <UserMenu />
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </div>
        );
}


export default Profile;