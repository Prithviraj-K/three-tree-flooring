import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import styles from './contactFormStyle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(styles);

const ContactForm = () => {

    const classes = useStyles(useStyles);

    return (
        <div>
            <form>
                <Typography variant="h5" style={{textAlign: "center"}}>
                    Contact us via e-mail
                </Typography>
                <TextField id="outlined-basic" label="Name" variant="outlined" className={classes.fieldText}/>
                <TextField id="outlined-baseic" label="Email" variant="outlined" className={classes.fieldText}/>
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows="6"
                    variant="outlined"
                    className={classes.fieldText}
                />                
                <Button disabled className={classes.fieldButton}>Submit</Button>
            </form>
        </div>
    );
}

export default ContactForm;