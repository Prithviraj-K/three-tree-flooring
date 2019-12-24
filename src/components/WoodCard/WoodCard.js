import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const useStyles = makeStyles(theme => ({
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
  },
  paper: {
    position: 'absolute',
    width: "80%",
    marginLeft: "5%",
    marginTop: "3%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ScrollAnimation animateIn="slideInUp" animateOnce offset={150}>
        <Card className={classes.card}>
          <CardActionArea onClick={handleOpen}>
            <CardMedia style = {{ height: 350}}
              image={require (`../../assets/img/hardwood/${props.name.toLowerCase()}.png`)} />
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
      
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} className={classes.paper}>
          <h2 id="simple-modal-title">{props.name}</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </div>
     
  );
}