import React from 'react';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Footer from '../Footer/Footer';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    card: {
      width: "40vw",
      height: "wrap"
    },
    textCard: {
        padding: "1em",
        justify: "center"
    },
    title: {
        marginTop: "2em"
    },
    '@media (max-width: 1279px)': {
        card: {
            width: "100vw"
        },
        
    }
  }));

const logoBlack = require ('../../assets/img/logo-black-large.png');

const Care = () => {

    const classes = useStyles();

    return(
        <div style={{overflow: "hidden"}}>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                logoC={logoBlack}
                color="white"
            />
            <div style={{marginTop: "7em"}}>
                <Typography variant="h4" align="center">
                    Maintenance & Care
                </Typography>
            </div>
            <Divider style={{margin: "auto", marginBottom: "2em", width: "30%", backgroundColor: "#000000"}}/>
            <div>
                <Grid container
                spacing={1}
                alignItems="center"
                justify="center"
                >
                    <Grid item xs={12} md={12} lg={6} xl={6} align="center">
                        <Card className={classes.card}>
                                <CardContent className={classes.title}>
                                   <Typography variant="h5">
                                        OSMO WASH & CARE CONCENTRATE
                                   </Typography>
                                   <div className={classes.textCard}>
                                        <Typography variant="body">
                                            Osmo Wash and Care is a special every day cleaning concentrate for 
                                            wooden and cork floors treated with Osmo Polyx®-Oil. Also suitable 
                                            for varnished, stone, plastic, PVC and other water resistant surfaces. 
                                            It is highly effective and water soluble for quick, easy and thorough 
                                            floor maintenance – even for large and high traffic areas. Keeping 
                                            wooden floors hydrated, due to natural oil content within the product.
                                        </Typography>
                                   </div>
                                   
                                </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6} xl={6} align="center">
                        <Card className={classes.card}>
                                <CardContent className={classes.title}>
                                    <Typography variant="h5">
                                        OSMO MAINTENANCE OIL
                                    </Typography>
                                    <div className={classes.textCard}>
                                        <Typography variant="body">
                                            For periodic maintenance, floors can be treated with Osmo Polyx®-Oil. 
                                            Floors with expected high tread and quick wear can be regenerated and 
                                            cleaned at the same time with Maintenance Oil. Based on natural vegetable 
                                            waxes – the timely use can prevent time consuming sanding or renovation 
                                            work in public spaces and commercial buildings such as restaurants, shopping 
                                            centres and even in airports!
                                        </Typography>
                                    </div>
                                </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6} xl={6} align="center">
                        
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}

export default Care;