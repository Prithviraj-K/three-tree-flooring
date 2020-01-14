import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const ContactDetails = () => {
    return (
        <div>
            <Typography variant="body" style={{fontWeight: "bold"}}>
                Located in the Green Belt of Ontario, Canada Three Trees Flooring is a Toronto based 
                flooring manufacturer of sustainable and eco-friendly flooring options. Inspired by the 
                company’s European roots we provide engineered hardwood flooring encompassed with European 
                quality, design and innovation with a Canadian touch.
            </Typography>
            <Divider style={{margin: "1em"}}/>
            <RoomIcon/>
            <div style={{textAlign: "center"}}>
                <div>
                    <Typography variant="body">
                        20 Alness, Unit 1, Toronto, ON, Canada
                    </Typography>
                </div>
                <div style={{marginTop: "1em"}}>
                    <Typography variant="body">
                        Monday - Friday: 9am-5pm
                    </Typography>
                </div>
                <div>
                    <Typography variant="body">
                        Saturday - Sunday: Closed
                    </Typography>
                </div>
            </div>        
            <Divider style={{margin: "1em"}}/>
            <CallIcon/>
            <div style={{textAlign: "center", justify: "center"}}>
                <Typography variant="body">
                    (416) 665-2624
                </Typography>
            </div>
            <Divider style={{margin: "1em"}}/>
            <div style={{textAlign: "center", fontWeight: "bold", textDecoration: "underline"}}>
                Visit us on social media
                <div style={{marginTop: "1em"}}>
                    <a target="_blank" href="https://www.facebook.com/ThreeTreesFlooring/" style={{color: "black"}}>
                        <FacebookIcon/>
                    </a>
                    <a target="_blank" href="https://ca.linkedin.com/company/three-trees-flooring" style={{color: "black"}}>
                        <LinkedInIcon/>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/threetreesflooring/?hl=en" style={{color: "black"}}>
                        <InstagramIcon/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;