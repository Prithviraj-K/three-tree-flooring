import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { withStyles } from "@material-ui/styles";

import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Button from '@material-ui/core/Button';

const styles = () => ({
    divBtn: {
        margin: "auto",
        textAlign: "center",
        height: "5em",
        width: "100%"
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
                <div style={{height: "80vh", backgroundColor: "#DEDEDE"}}>

                </div>
                <div>
                    <Button onClick={this.handleLogout} className={classes.divBtn}>Logout</Button>
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