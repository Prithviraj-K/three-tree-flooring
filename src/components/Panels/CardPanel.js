import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    imgCent: {
        width: "100%",
        height: "auto"
    },
    negM: {
        margin: "0"
    },
    '@media (max-width: 1280px)': {
        imgCent: {
            width: "100%",
            height: "auto"
        }
    },
    '@media (max-width: 960px)': {
        imgCent: {
            width: "75%",
            height: "auto"
        }
    },
    '@media (max-width: 600px)': {
        imgCent: {
            width: "60%",
            height: "auto",
            margin: "0"
        }
    }   
}));

const CardPanel = (props) => {

    const classes = useStyles();

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <img 
                    src={require(`../../assets/img/panels/${props.name.toLowerCase()}-panel.png`)} 
                    alt="panel" 
                    className={classes.imgCent} 
                />
                <div className={classes.negM}>
                    <Typography align="center" variant="button">
                        {props.name}
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default CardPanel;