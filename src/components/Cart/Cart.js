import React from 'react';
import styles from "../Header/headerLinksStyle";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '../CustomButtons/Button';

const useStyles = makeStyles(styles);

const Cart = () => {
    const classes = useStyles();
    return (
        <div style={{ justifyContent: "center" }} className={classes.paper}>
            <Typography variant="h6" align="center">Selected Samples</Typography>
            <Divider style={{ marginBottom: "2em" }} />
            <Typography variant="body1" align="center">Cart is empty.</Typography>
            <Button color="primary" disabled>Checkout</Button>
        </div>
    );
}

export default Cart;