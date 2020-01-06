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
    {key: 1, name: "Boher", description: "Veneto"},
    {key: 2, name: "Citadella", description: "Veneto"},
    {key: 3, name: "Cittanova", description: "Veneto"},
    {key: 4, name: "Conegliano", description: "Veneto"},
    {key: 5, name: "Cremona", description: "Veneto"},
    {key: 6, name: "Floyen", description: "Nordic"},
    {key: 7, name: "Jesolo", description: "Veneto"},
    {key: 8, name: "Kalmar", description: "Nordic"},
    {key: 9, name: "Kronberg", description: "Nordic"},
    {key: 10, name: "Lublin", description: "Veneto"},
    {key: 11, name: "Marcon", description: "Veneto"},
    {key: 12, name: "Merano", description: "Veneto"},
    {key: 13, name: "Modena", description: "Veneto"},
    {key: 14, name: "Montebelluna", description: "Veneto"},
    {key: 15, name: "Oslo", description: "Nordic"},
    {key: 16, name: "Pavia", description: "Veneto"},
    {key: 17, name: "Ponzano", description: "Veneto"},
    {key: 18, name: "Roman", description: "Veneto"},
    {key: 19, name: "Trento", description: "Veneto"},
    {key: 20, name: "Treviso", description: "Veneto"},
    {key: 21, name: "Vasa", description: "Nordic"},
    {key: 22, name: "Vazzola", description: "Veneto"},
    {key: 23, name: "Vicenza", description: "Veneto"},
    {key: 24, name: "Villa del Conte", description: "Veneto"},
    {key: 25, name: "Vittorio", description: "Veneto"}
];

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

const logoBlack = require ('../../assets/img/logo-black-large.png');

const HardwoodPage = () => {

    const listItems = listDetails.map((number)=> 
        <Grid item xs={12} md={6} lg={4} xl={3} align="center" style={{width: "100%", marginBottom: "3em"}}>
            <WoodCard
                key={number.key}
                name={number.name} 
                description={number.description} 
                species={species}
                grades={grades}
                origin={origin}
                width={width}
                thickness={thickness}
                wearLayer={wearLayer}
                bevel={bevel}
                texture={texture}
                gloss={gloss}
                finish={finish}
                construction={construction}
                plankL={plankL}
                cert={cert}
            />
        </Grid>
    );

    return(
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                logoC={logoBlack}
                color="white"
            />
            <div style={{width: "100%", height:"100%", backgroundImage: `url(${imgBg})`}}>
                <div style={{backgroundColor: "rgba(255,255,255,0.7)"}}>
                    <ScrollAnimation animateIn="slideInDown" animateOnce>
                        <Typography variant="h3" style={{paddingTop: "2em", textAlign: "center"}}>
                            Collection
                        </Typography>
                        <Typography variant="h5" style={{textAlign: "center", marginBottom: "1em"}}>
                            Contact us for free samples
                        </Typography>
                    </ScrollAnimation>
                    <Divider style={{margin: "auto", marginBottom: "2em", width: "30%", backgroundColor: "#000000"}}/>
                    <ScrollUpButton style={{width: 40, height: 40}} ToggledStyle={{right: 10}}/>
                    <div>
                        <Grid container
                        spacing={1}
                        alignItems="center"
                        justify="center"
                        style={{margin: "auto", marginTop: "2em", width: "95%"}}>
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