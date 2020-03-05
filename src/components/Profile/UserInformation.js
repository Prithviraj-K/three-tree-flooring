import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { logoutUser } from '../../actions';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Button from '@material-ui/core/Button';

const styles = () => ({
    infoCard: {
        marginTop: "0em"
    },
    divBtn: {
        margin: "auto",
        textAlign: "center",
        height: "3em",
        color: "red",
        float: "right"
    }
});

class UserInformation extends Component {

    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };

    render() {

        const { classes, user, isLoggingOut, logoutError } = this.props;

        return (
            <div>
                <Card className={classes.infoCard}>
                    <CardContent>
                        <Button onClick={this.handleLogout} className={classes.divBtn}>
                            <MeetingRoomIcon />
                            Logout
                        </Button>
                        <Typography variant="h5">
                            Hi //name
                        </Typography>
                        <Divider />
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <div style={{ padding: "1em 0 0 0" }}>
                                    <Typography variant="body2">
                                        Email:
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="body1">
                                        {user.email}
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div>
                                    <Typography variant="body2">
                                        Addresss:
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="body1">
                                        User address
                                    </Typography>
                                </div>
                            </Grid>
                            {isLoggingOut && <p>Logging out...</p>}
                            {logoutError && <p>Error logging out</p>}
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
}

export default withStyles(styles)(connect(mapStateToProps)(UserInformation));