import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import WoodCardZoom from './WoodCardZoom';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 375,
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.8) !important",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.8) !important"
    },
    borderRadius: "1em"
  },
  media: {
    height: 300,
  },
  sampleBtn: {
    width: "100%",
    textAlign: "center"
  },
  paper: {
    position: 'absolute',
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "scroll"
  },
  modalS: {
    position: "absolute",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  zoom: {
    alignContent: "center"
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
            <CardMedia style = {{ height: 250}}
              image={require (`../../assets/img/hardwood/${props.name.toLowerCase()}.jpg`)} />
            <CardContent style={{marginTop: "0", padding: "0.5em", backgroundColor: "#000000", color: "#FFF"}}>
              <Typography gutterBottom variant="h6">
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
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className={classes.modalS}
      >
        <Fade in={open}>
          <div style={{justifyContent: "center"}} className={classes.paper}>
            <h3 style={{textAlign: "center"}}>{props.name} Specifications</h3>
            <div>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow hover>
                      <TableCell>Species</TableCell>
                      <TableCell align="right">{props.species}</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Grades</TableCell>
                      <TableCell align="right">{props.grades}</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Origin of Wood</TableCell>
                      <TableCell align="right">{props.origin}</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Width</TableCell>
                      <TableCell align="right">{props.width}</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Thickness</TableCell>
                      <TableCell align="right">{props.thickness}</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Wear Layer</TableCell>
                      <TableCell align="right">{props.wearLayer}</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Bevel</TableCell>
                      <TableCell align="right">{props.bevel}</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Texture</TableCell>
                      <TableCell align="right">{props.texture}</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Gloss</TableCell>
                      <TableCell align="right">{props.gloss}</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Finish</TableCell>
                      <TableCell align="right">{props.finish}</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Construction</TableCell>
                      <TableCell align="right">{props.construction}</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Plank Lengths</TableCell>
                      <TableCell align="right">{props.plankL}</TableCell>
                    </TableRow>
                    <TableRow hover>
                      <TableCell>Certification</TableCell>
                      <TableCell align="right">{props.cert}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </Fade>        
      </Modal>
    </div>
     
  );
}