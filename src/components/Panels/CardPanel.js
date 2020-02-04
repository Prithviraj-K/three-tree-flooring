import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import FadeMaterial from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';


const useStyles = makeStyles(theme => ({
    imgCent: {
        width: "100%",
        height: "auto"
    },
    negM: {
        margin: "0"
    },
    modalS: {
        position: "absolute",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        position: 'absolute',
        height: "80%",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: "scroll",
        overflowX: "hidden"
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

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <img src={require(`../../assets/img/panels/${props.name.toLowerCase()}-panel.png`)} className={classes.imgCent} />
                <div className={classes.negM}>
                    <Typography align="center" variant="button">
                        {props.name}
                    </Typography>
                </div>
            </div>

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
                    <div style={{ justifyContent: "center" }} className={classes.paper}>
                        <div visibility={(props.key === 1) ? "visible" : "hidden"}>
                            First
                        </div>
                        <div visibility={(props.key !== 1) ? "visible" : "hidden"}>
                            Others
                        </div>
                    </div>

                </FadeMaterial>
            </Modal>
        </div>
    );
}

export default CardPanel;