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
import Zoom from 'react-reveal/Zoom';
import layerImg from '../../assets/img/woodLayers.png';

//Table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import styles from './styleCare';
const useStyles = makeStyles(styles);

const logoBlack = require('../../assets/img/logo-black-large.png');

const species = "White Oak";
const grades = "Character, Select & Better";
const origin = "Europe";
const width = "4 1/4, 5 1/2, 7 1/2, 9 1/2";
const thickness = "3/4, 5/8";
const wearLayer = "4mm";
const bevel = "Micro-bevel";
const texture = "Wire-brush";
const gloss = "Matte";
const finish = "Osmo Hardwax-Oil";
const construction = "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core";
const plankL = "5.7 ft - 7.7 ft";
const cert = "100% FSC Certified";

const Care = () => {
    const classes = useStyles();
    return (
        <div className={classes.divFull}>
            <div>
                <Header
                    rightLinks={<HeaderLinks />}
                    fixed
                    logoC={logoBlack}
                    color="white"
                />
                <div className={classes.sectionTop}>
                    <Zoom>
                        <div style={{ textAlign: "center" }}>
                            <img src={layerImg} alt="layer" className={classes.layerImg} />
                        </div>
                    </Zoom>
                </div>
            </div>
            <div style={{ backgroundColor: "#EAE7DC", paddingTop: "2em", paddingBottom: "2em" }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Fade>
                            <Typography variant="h4" align="center">Specifications</Typography>
                            <Divider className={classes.titleDivide} />
                        </Fade>
                        <Fade bottom>
                            <Card style={{ margin: "1em" }}>
                                <CardContent>
                                    <TableContainer>
                                        <Table>
                                            <TableBody>
                                                <TableRow hover>
                                                    <TableCell>Species</TableCell>
                                                    <TableCell align="right">{species}</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>Grades</TableCell>
                                                    <TableCell align="right">{grades}</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>Origin of Wood</TableCell>
                                                    <TableCell align="right">{origin}</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>Width</TableCell>
                                                    <TableCell align="right">{width}</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>Thickness</TableCell>
                                                    <TableCell align="right">{thickness}</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>Wear Layer</TableCell>
                                                    <TableCell align="right">{wearLayer}</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>Bevel</TableCell>
                                                    <TableCell align="right">{bevel}</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>Texture</TableCell>
                                                    <TableCell align="right">{texture}</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>Gloss</TableCell>
                                                    <TableCell align="right">{gloss}</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>Finish</TableCell>
                                                    <TableCell align="right">{finish}</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>Construction</TableCell>
                                                    <TableCell align="right">{construction}</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>Plank Lengths</TableCell>
                                                    <TableCell align="right">{plankL}</TableCell>
                                                </TableRow>
                                                <TableRow hover>
                                                    <TableCell>Certification</TableCell>
                                                    <TableCell align="right">{cert}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </CardContent>
                            </Card>
                        </Fade>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div>
                            <Fade>
                                <Typography variant="h4" align="center">
                                    Maintenance & Care
                                </Typography>
                                <Divider className={classes.titleDivide} />
                            </Fade>
                            <Grid
                                container
                                spacing={1}
                            >
                                <Grid item xs={12} s={12} md={12} lg={12} xl={12} align="center">
                                    <Fade bottom>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h5">
                                                    PROTECTION
                                                </Typography>
                                                <div>
                                                    <Typography variant="body1">
                                                        A. Post-installation
                                                    </Typography>
                                                    <Divider style={{ width: "80%", margin: "auto" }} />
                                                    <div className={classes.textCard}>
                                                        <Typography variant="body1">
                                                            <span style={{ fontWeight: "bold" }}>1.</span> After installation, if you choose to protectively cover the floor,
                                                            cover the floor completely. Some species are light-sensitive and
                                                            uncovered areas may change color.
                                                        </Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant="body1">
                                                            <span style={{ fontWeight: "bold" }}>2. </span>Covering a glue-down application may not allow some adhesives to properly
                                                            cure. Follow the flooring and adhesive manufacturers' recommendations.
                                                        </Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant="body1">
                                                            <span style={{ fontWeight: "bold" }}>3. </span>Use a covering material with a vapor permeance (perm rating) of no less
                                                            than 1 perm (class III vapor retarder).
                                                        </Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant="body1">
                                                            <span style={{ fontWeight: "bold" }}>4. </span>Any covering should be taped, using a low-adhesion tape, to base or shoe
                                                            mouldings. Do not tape to finished flooring. When taping paper or sheets together, tape them to each other not to the floor.
                                                        </Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant="body1">
                                                            <span style={{ fontWeight: "bold" }}>5. </span>Do not allow the floor covering to sit on the installed floor for an extended
                                                            period of time.
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Fade>
                                </Grid>
                                <Grid item xs={12} s={12} md={12} lg={12} xl={12} align="center">
                                    <Fade bottom cascade>
                                        <Card style={{marginTop: "1em"}}>
                                            <CardContent className={classes.title}>
                                                <Typography variant="h5">
                                                    OSMO WASH & CARE CONCENTRATE
                                                </Typography>
                                                <Divider style={{ width: "80%", margin: "auto" }} />
                                                <div className={classes.textCard}>
                                                    <Typography variant="body1">
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
                                    </Fade>
                                </Grid>
                                <Grid item xs={12} s={12} md={12} lg={12} xl={12} align="center">
                                    <Fade bottom>
                                        <Card style={{marginTop: "1em"}}>
                                            <CardContent className={classes.title}>
                                                <Typography variant="h5">
                                                    OSMO MAINTENANCE OIL
                                                </Typography>
                                                <Divider style={{ width: "80%", margin: "auto" }} />
                                                <div className={classes.textCard}>
                                                    <Typography variant="body1">
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
                                    </Fade>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    );
}

export default Care;