import React from 'react';
import classNames from 'classnames';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Grid from '@material-ui/core/Grid';
import { Typography, Button} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import WoodCard from '../WoodCard/WoodCard';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import src1 from '../../assets/img/bg.jpg';

import styles from "../../assets/img/jss/components.js";
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(styles);
 
const listDetails = [
    {name: "Boher", description: "Veneto", link: ""},
    {name: "Citadella", description: "Veneto", link: ""},
    {name: "Cittanova", description: "Veneto", link: ""},
    {name: "Conegliano", description: "Veneto", link: ""},
    {name: "Cremona", description: "Veneto", link: ""},
    {name: "Floyen", description: "Veneto", link: ""},
    {name: "Jesolo", description: "Veneto", link: ""},
    {name: "Kalmar", description: "Veneto", link: ""},
    {name: "Kronberg", description: "Veneto", link: ""},
    {name: "Lublin", description: "Veneto", link: ""},
    {name: "Marcon", description: "Veneto", link: ""},
    {name: "Merano", description: "Veneto", link: ""},
    {name: "Modena", description: "Veneto", link: ""},
    {name: "Montebelluna", description: "Veneto", link: ""},
    {name: "Oslo", description: "Veneto", link: ""},
    {name: "Pavia", description: "Veneto", link: ""},
    {name: "Ponzano", description: "Veneto", link: ""},
    {name: "Roman", description: "Veneto", link: ""},
    {name: "Trento", description: "Veneto", link: ""},
    {name: "Treviso", description: "Veneto", link: ""},
    {name: "Vasa", description: "Veneto", link: ""},
    {name: "Vazzolo", description: "Veneto", link: ""},
    {name: "Vicenza", description: "Veneto", link: ""},
    {name: "Villa del Conte", description: "Veneto", link: ""},
    {name: "Floyen", description: "Nordic", link: ""},
    {name: "Kalmar", description: "Nordic", link: ""},
    {name: "Kronberg", description: "Nordic", link: ""},
    {name: "Oslo", description: "Nordic", link: ""},
    {name: "Vasa", description: "Nordic", link: ""},
];



const HardwoodPage = () => {
    
    const classes = useStyles();

    const listItems = listDetails.map((number)=> 
        <Grid item xs={12} md={6} lg={4} align="center" style={{width: "100%"}}>
            <WoodCard name={number.name} description={number.description}/>
        </Grid>
    );

    const handleClick = () => {
        this.setState({showMore: true})
    }

    return(
        <div style={{backgroundImage: require('../../assets/img/whiteOakTexture.jpg')}}>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                color="dark"
                changeColorOnScroll={{
                    height: 100,
                    color: "transparent"
                }}
            />
            <ScrollAnimation animateIn="flipInX" animateOut="flipOutX">
                <div>
                    <Typography variant="h1" style={{marginTop: "1em", textAlign: "center", padding: "1em"}}>
                        Hardwood
                    </Typography>
                </div>
            </ScrollAnimation>
            <Divider style={{paddingRight: "12em", paddingLeft: "6em", marginRight: "5em", marginLeft: "5em"}}/>
            <div>
                <Grid container
                spacing={1}
                alignItems="center"
                justify="center"
                style={{marginTop: "2em", width: "100%"}}>
                    {listItems}                   
                </Grid>
                <Divider style={{marginTop: "2em"}}/>
                <Footer/>
            </div>
        </div>  
    );
}

export default HardwoodPage;