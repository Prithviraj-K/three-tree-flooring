import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade'
import Modal from '@material-ui/core/Modal';
import FadeMaterial from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

import styles from "./panelStyle";
const useStyles = makeStyles(styles);

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
            <Fade bottom>
                <div style={{ textAlign: "center" }}>
                    <img src={require(`../../assets/img/panels/${props.name.toLowerCase()}-panel.png`)} className={classes.imgCent} />
                    <div className={classes.negM}>
                        <Typography align="center" variant="h6">
                            {props.name}
                        </Typography>
                        <Button onClick={handleOpen}>Learn More</Button>
                    </div>
                </div>
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
                    <div>
                        Hello
                    </div>
                </FadeMaterial>
            </Modal>
        </div>

    );
}

export default CardPanel;