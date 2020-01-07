import React from 'react';
import { PlacesAirportShuttle } from 'material-ui/svg-icons';
import { makeStyles } from "@material-ui/core/styles";

const FooterLink = (props) => {

    const useStyles = makeStyles(theme => ({
        card: {
          borderRadius: "1em",
          border: "10px solid #12ba04",
          width: "40vw",
          height: "30em"
        },
        textCard: {
            padding: "5em",
            justify: "center"
        }
    }));

    return (

        const classes = useStyles();

        <div>
            <ListItem className={classes.inlineBlock} style={{marginRight: "3px", borderBottom: "1px solid white"}}>
                <Link to="/" style={{textDecoration: "none", color: "#FFF"}}>
                <Button color="transparent">
                    {props.linkName}
                </Button>
                </Link>
            </ListItem>
        </div>
    );
}

export default FooterLink