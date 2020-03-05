import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import FadeMaterial from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from 'react-reveal/Fade'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 375,
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.8) !important",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.8) !important"
    },
    borderRadius: "1em"
  },
  sampleBtn: {
    width: "40%",
    margin: "1em",
    textAlign: "center"
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "hidden"
  },
  modalS: {
    position: "absolute",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  imgModal: {
    height: "80vh",
    display: "block",
    margin: "auto"
  },
  '@media (max-width: 1280px)': {
    imgModal: {
      height: "70vh"
    }
  },
  '@media (max-width: 960px)': {
    imgModal: {
      height: "40vh"
    }
  },
  '@media (max-width: 600px)': {
    imgModal: {
      height: "30vh"
    }
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const imgModal = <img className={classes.imgModal} src={require(`../../assets/img/hardwood/${props.name.toLowerCase()}.jpg`)} />;


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fade bottom>
        <Card className={classes.card}>
          <CardActionArea onClick={handleOpen}>
            <CardMedia style={{ height: 250 }}
              image={require(`../../assets/img/hardwood/${props.name.toLowerCase()}-icon.jpg`)} />
            <CardContent style={{ marginTop: "0", padding: "0.5em", backgroundColor: "#000000", color: "#FFF" }}>
              <Typography gutterBottom variant="h6">
                {props.name}
              </Typography>
              <Typography variant="body2" component="p">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Fade>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className={classes.modalS}
      >
        <FadeMaterial in={open}>
          <div style={{ textAlign: "center", justifyContent: "center" }} className={classes.paper}>
            <Typography variant="h5" align="center" style={{ marginBottom: "1em" }}>{props.name}</Typography>
            {imgModal}
            <Button className={classes.sampleBtn} style={{ borderBottom: "1px solid green" }}>Add to Cart</Button>
            <Button onClick={handleClose} className={classes.sampleBtn} style={{ borderBottom: "1px solid red" }}>Close</Button>
          </div>
        </FadeMaterial>
      </Modal>
    </div>

  );
}