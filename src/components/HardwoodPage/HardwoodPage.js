import React from 'react';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import WoodCard from '../WoodCard/WoodCard';
import Footer from '../Footer/Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import ScrollUpButton from "react-scroll-up-button";

import imgBg from "../../assets/img/whiteOakTexture.jpg";
 
const listDetails = [
    {name: "Boher", description: "Veneto"},
    {name: "Citadella", description: "Veneto"},
    {name: "Cittanova", description: "Veneto"},
    {name: "Conegliano", description: "Veneto"},
    {name: "Cremona", description: "Veneto"},
    {name: "Floyen", description: "Nordic"},
    {name: "Jesolo", description: "Veneto"},
    {name: "Kalmar", description: "Nordic"},
    {name: "Kronberg", description: "Nordic"},
    {name: "Lublin", description: "Veneto"},
    {name: "Marcon", description: "Veneto"},
    {name: "Merano", description: "Veneto"},
    {name: "Modena", description: "Veneto"},
    {name: "Montebelluna", description: "Veneto"},
    {name: "Oslo", description: "Nordic"},
    {name: "Pavia", description: "Veneto"},
    {name: "Ponzano", description: "Veneto"},
    {name: "Roman", description: "Veneto"},
    {name: "Trento", description: "Veneto"},
    {name: "Treviso", description: "Veneto"},
    {name: "Vasa", description: "Nordic"},
    {name: "Vazzola", description: "Veneto"},
    {name: "Vicenza", description: "Veneto"},
    {name: "Villa del Conte", description: "Veneto"},
    {name: "Vittorio", description: "Veneto"}
];

const HardwoodPage = () => {

    const listItems = listDetails.map((number)=> 
        <Grid item xs={12} md={6} lg={4} xl={3} align="center" style={{width: "100%", marginBottom: "0.8em"}}>
            <WoodCard name={number.name} description={number.description}/>
        </Grid>
    );

    return(
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                color="dark"
                changeColorOnScroll={{
                    height: 100,
                    color: "transparent"
                }}
            />
            <div style={{width: "100%", height:"100%", backgroundImage: `url(${imgBg})`}}>
                <div style={{backgroundColor: "rgba(255,255,255,0.5)"}}>
                    <ScrollAnimation animateIn="flipInX" animateOnce>
                        <Typography variant="h1" style={{marginTop: "1em", textAlign: "center", padding: "1em"}}>
                            Hardwood
                        </Typography>
                    </ScrollAnimation>
                    <Divider variant="middle" style={{marginBottom: "2em"}}/>
                    <ScrollUpButton style={{width: 40, height: 40}} ToggledStyle={{right: 10}}/>
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
            </div>
        </div>  
    );
}

export default HardwoodPage;