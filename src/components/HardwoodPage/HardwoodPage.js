import React from 'react';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import WoodCard from '../WoodCard/WoodCard';
import Footer from '../Footer/Footer';
import Fade from 'react-reveal/Fade';

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
    {key: 8, name: "Kronberg", description: "Nordic"},
    {key: 9, name: "Lublin", description: "Veneto"},
    {key: 10, name: "Marcon", description: "Veneto"},
    {key: 11, name: "Merano", description: "Veneto"},
    {key: 12, name: "Modena", description: "Veneto"},
    {key: 13, name: "Montebelluna", description: "Veneto"},
    {key: 14, name: "Oslo", description: "Nordic"},
    {key: 15, name: "Pavia", description: "Veneto"},
    {key: 16, name: "Ponzano", description: "Veneto"},
    {key: 17, name: "Roman", description: "Veneto"},
    {key: 18, name: "Trento", description: "Veneto"},
    {key: 19, name: "Treviso", description: "Veneto"},
    {key: 20, name: "Vasa", description: "Nordic"},
    {key: 21, name: "Vazzola", description: "Veneto"},
    {key: 22, name: "Vicenza", description: "Veneto"},
    {key: 23, name: "Villa del Conte", description: "Veneto"},
    {key: 24, name: "Vittorio", description: "Veneto"}
];


const logoBlack = require ('../../assets/img/logo-black-large.png');


const HardwoodPage = () => {
    const listItems = listDetails.map((number)=> 
        <Grid item xs={12} md={6} lg={4} xl={3} align="center" style={{width: "100%", marginBottom: "3em"}}>
            <WoodCard
                key={number.key}
                name={number.name} 
                description={number.description}
            />
        </Grid>
    );

    return(
        <div style={{backgroundImage: `url(${imgBg})`, backgroundAttachment: "fixed"}}>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                logoC={logoBlack}
                color="white"
            />
            <div 
                style={{ 
                    width: "100%", 
                    height:"100%", 
                }}
            >
                <Fade top>
                    <Typography variant="h3" style={{paddingTop: "2em", textAlign: "center"}}>
                        Collection
                    </Typography>
                    <Typography variant="body1" style={{textAlign: "center", marginBottom: "1em"}}>
                        Contact us for a <span style={{fontWeight: "bold"}}>free sample</span>
                    </Typography>
                </Fade>
                <Divider style={{margin: "auto", marginBottom: "2em", width: "20%", backgroundColor: "#000000"}}/>
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
    );
}

export default HardwoodPage;