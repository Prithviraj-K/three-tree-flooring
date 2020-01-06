import React from 'react';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import logoBlack from '../../assets/img/logo-black-large.png';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const Contact = () => {
    return(
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                logoC={logoBlack}
                color="rose"
                changeColorOnScroll={{
                    height: 100,
                    color: "white"
                }}
            />
            <Typography variant="h4" align="center" style={{marginTop: "3em"}}>Contact Us</Typography>
            <Divider variant="middle" style={{width: "20%", margin: "auto", marginBottom: "2em"}}/>
            <Grid container align="center" style={{width: "100%", marginBottom: "3em"}}>
                <Grid item xs={12} s={12} m={6} lg={6}>
                    Form here
                </Grid>
                <Grid item xs={12} s={12} m={6} lg={6}>
                    Map here
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;