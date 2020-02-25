import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { withStyles } from "@material-ui/styles";

import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Button from '@material-ui/core/Button';

const styles = () => ({
    divBtn: {
        margin: "4em auto auto auto",
        textAlign: "center"
    }
});

const logoBlack = require('../../assets/img/logo-black-large.png');

class Profile extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    render() {

        const { classes, isLoggingOut, logoutError } = this.props;

        return (
            <div>
                <Header
                    rightLinks={<HeaderLinks />}
                    absolute
                    logoC={logoBlack}
                    color="white"
                />
                <div className={classes.divBtn}>
                    <Button onClick={this.handleLogout}>Logout</Button>
                    {isLoggingOut && <p>Logging out...</p>}
                    {logoutError && <p>Error logging out</p>}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError
    };
  }
  export default withStyles(styles)(connect(mapStateToProps)(Profile));