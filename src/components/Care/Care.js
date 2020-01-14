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
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(theme => ({
    card: {
      width: "45vw",
      height: "wrap",
      boxShadow: "0 4px 20px -12px rgba(0,0,0,0.8) !important",
      margin: "auto",
      marginBottom: "2em"
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
                <Fade top>
                    <Typography variant="h4" align="center">
                        Maintenance & Care
                    </Typography>
                </Fade>
            </div>
            <Divider style={{margin: "auto", marginBottom: "2em", width: "30%", backgroundColor: "#000000"}}/>
            <div>]
                <Grid container
                spacing={1}
                alignItems="center"
                justify="center"
                >       
                    <Fade bottom>
                        <Grid item xs={12} md={12} lg={6} xl={6} align="center">
                            <Card className={classes.card}>
                                    <CardContent className={classes.title}>
                                    <Typography variant="h5">
                                            OSMO WASH & CARE CONCENTRATE
                                    </Typography>
                                    <Divider style={{width: "80%", margin: "auto"}}/>
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
                    </Fade>
                    <Fade bottom>
                        <Grid item xs={12} md={12} lg={6} xl={6} align="center">
                            <Card className={classes.card}>
                                    <CardContent className={classes.title}>
                                        <Typography variant="h5">
                                            OSMO MAINTENANCE OIL
                                        </Typography>
                                        <Divider style={{width: "80%", margin: "auto"}}/>
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
                    </Fade>
                    <Fade bottom>
                        <Grid item xs={12} md={12} lg={6} xl={6} align="center">
                            <Card className={classes.card}>
                                <CardContent className={classes.title}>
                                    <Typography variant="h5">
                                        PROTECTION
                                    </Typography>
                                    <div>
                                        <Typography variant="body">
                                            A. Post-installation
                                        </Typography>
                                        <Divider style={{width: "80%", margin: "auto"}}/>
                                        <div className={classes.textCard}>
                                            <Typography variant="body">
                                                <span style={{fontWeight: "bold"}}>1.</span> After installation, if you choose to protectively cover the floor,
                                                cover the floor completely. Some species are light-sensitive and
                                                uncovered areas may change color.
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="body">
                                                <span style={{fontWeight: "bold"}}>2. </span>Covering a glue-down application may not allow some adhesives to properly
                                                cure. Follow the flooring and adhesive manufacturers' recommendations.
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="body">
                                                <span style={{fontWeight: "bold"}}>3. </span>Use a covering material with a vapor permeance (perm rating) of no less
                                                than 1 perm (class III vapor retarder).
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="body">
                                                <span style={{fontWeight: "bold"}}>4. </span>Any covering should be taped, using a low-adhesion tape, to base or shoe
                                                mouldings. Do not tape to finished flooring. When taping paper or sheets together, tape them to each other not to the floor.
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="body">
                                                <span style={{fontWeight: "bold"}}>5. </span>Do not allow the floor covering to sit on the installed floor for an extended
                                                period of time.
                                            </Typography>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Fade>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}

export default Care;