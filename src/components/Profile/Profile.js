import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { withStyles } from "@material-ui/styles";
import UserInformation from './UserInformation';
import UserMenu from './UserMenu.js';
import Grid from '@material-ui/core/Grid';

import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Footer from '../Footer/Footer';

const logoBlack = require('../../assets/img/logo-black-large.png');

class Profile extends Component {
    render() {
        return (
            <div>
                <Header
                    rightLinks={<HeaderLinks />}
                    absolute
                    logoC={logoBlack}
                    color="white"
                />
                <div style={{ height: "70vh", padding: "5em", backgroundColor: "#DEDEDE" }}>
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
}


export default Profile;