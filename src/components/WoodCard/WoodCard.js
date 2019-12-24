import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '../CustomButtons/Button';
import Typography from '@material-ui/core/Typography';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const useStyles = makeStyles({
  card: {
    maxWidth: 360,
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.8) !important",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.8) !important"
    },
    borderRadius: "2em"
  },
  media: {
    height: 350,
  },
  sampleBtn: {
    width: "100%",
    textAlign: "center"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={150} duration={0.3}>
      <Card className={classes.card}>
        <CardActionArea>
        <CardMedia style = {{ height: 350}}
          image={require ("../../assets/img/boher.png")} />
          <CardContent style={{backgroundColor: "#68a739", color: "#FFF"}}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ScrollAnimation>
    
  );
}