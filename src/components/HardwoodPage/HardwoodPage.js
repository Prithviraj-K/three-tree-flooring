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
    {key: 1, name: "Boher", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4.25, 5.5, 7.5, 9.5", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 2, name: "Citadella", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 3, name: "Cittanova", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 4, name: "Conegliano", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 5, name: "Cremona", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 6, name: "Floyen", description: "Nordic", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 7, name: "Jesolo", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 8, name: "Kalmar", description: "Nordic", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 9, name: "Kronberg", description: "Nordic", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 10, name: "Lublin", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 11, name: "Marcon", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 12, name: "Merano", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 13, name: "Modena", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 14, name: "Montebelluna", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 15, name: "Oslo", description: "Nordic", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 16, name: "Pavia", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 17, name: "Ponzano", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 18, name: "Roman", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 19, name: "Trento", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 20, name: "Treviso", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 21, name: "Vasa", description: "Nordic", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 22, name: "Vazzola", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 23, name: "Vicenza", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 24, name: "Villa del Conte", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"},
    {key: 25, name: "Vittorio", description: "Veneto", species: "White Oak", grades: "Character, Select & Better", origin: "Europe", width: "4 1/4, 5 1/2, 7 1/2, 9 1/2", thickness: "3/4, 5/8", wearLayer: "4 mm", bevel: "Micro-bevel", texture: "Wire-brush", gloss: "Matte", finish: "Osmo Hardwax-Oil", construction: "2-Ply construction - Marine grade – Baltic Birch 3-ply construction core", plankL: "5.7 ft - 7.7 ft", cert: "100% FSC Certified"}
];

const HardwoodPage = () => {

    const listItems = listDetails.map((number)=> 
        <Grid item xs={12} md={6} lg={4} xl={3} align="center" style={{width: "100%", marginBottom: "3em"}}>
            <WoodCard
                key={number.key}
                name={number.name} 
                description={number.description} 
                species={number.species}
                grades={number.grades}
                origin={number.origin}
                width={number.width}
                thickness={number.thickness}
                wearLayer={number.wearLayer}
                bevel={number.bevel}
                texture={number.texture}
                gloss={number.gloss}
                finish={number.finish}
                construction={number.construction}
                plankL={number.plankL}
                cert={number.cert}
            />
        </Grid>
    );

    return(
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 50,
                    color: "white"
                }}
            />
            <div style={{width: "100%", height:"100%", backgroundImage: `url(${imgBg})`}}>
                <div style={{backgroundColor: "rgba(255,255,255,0.7)"}}>
                    <ScrollAnimation animateIn="slideInDown" animateOnce>
                        <Typography variant="h1" style={{paddingTop: "1em", textAlign: "center"}}>
                            Collection
                        </Typography>
                        <Typography variant="h5" style={{textAlign: "center", marginBottom: "1em"}}>
                            Contact us for free samples
                        </Typography>
                    </ScrollAnimation>
                    <Divider style={{margin: "auto", marginBottom: "2em", width: "50%", backgroundColor: "#030303"}}/>
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