import React from 'react';
import Header from '../Header/Header';
import HeaderLinks from '../Header/HeaderLinks';

import Fade from 'react-reveal/Fade';
import { Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ScrollUpButton from "react-scroll-up-button";

import imgBg from "../../assets/img/whiteOakTexture.jpg";

const logoBlack = require ('../../assets/img/logo-black-large.png');

const Accessories = () => {
    return (
        <div>
            <Header
                rightLinks={<HeaderLinks />}
                fixed
                color="white"
                logoC={logoBlack}
            />
            <div 
                style={{ 
                    width: "100%", 
                    height:"100vh", 
                    backgroundImage: `url(${imgBg})`, 
                    backgroundAttachment: "fixed"
                }}
            >
                <Fade top>
                    <Typography variant="h3" style={{paddingTop: "2em", textAlign: "center"}}>
                        Collection
                    </Typography>
                    <Typography variant="h5" style={{textAlign: "center", marginBottom: "1em"}}>
                        Accessories
                    </Typography>
                </Fade>
                <Divider style={{margin: "auto", marginBottom: "2em", width: "20%", backgroundColor: "#000000"}}/>
                <ScrollUpButton style={{width: 40, height: 40}} ToggledStyle={{right: 10}}/>
            </div>
        </div>
    );
}

export default Accessories;