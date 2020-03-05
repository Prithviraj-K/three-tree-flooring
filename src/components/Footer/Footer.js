import React from "react";
import { Link } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from '../CustomButtons/Button';
import NewReleasesIcon from '@material-ui/icons/NewReleases';

import styles from "./footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  
  return (
    <footer className={footerClasses} style={{backgroundColor: "black", color: "#FFF", boxShadow:
    "0 -2px 20px 0px rgba(0, 0, 0, 0.14), 0 -4px 12px 5px rgba(33, 33, 33, 0.46)"}}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to="/" style={{textDecoration: "none", color: "#FFF"}}>
                <Button color="transparent" style={{marginRight: "3px", borderBottom: "1px solid white"}}>
                  Home
                </Button>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/Hardwood" style={{textDecoration: "none", color: "#FFF"}}>
                <Button color="transparent" style={{marginRight: "3px", borderBottom: "1px solid white"}}>
                  Hardwood
                </Button>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/Panels" style={{textDecoration: "none", color: "#FFF"}}>
                <Button color="transparent" style={{marginRight: "3px", borderBottom: "1px solid white"}}>
                  Panels
                </Button>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/Care" style={{textDecoration: "none", color: "#FFF"}}>
                <Button color="transparent" style={{marginRight: "3px", borderBottom: "1px solid white"}}>
                  Learn
                </Button>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/Retailers" style={{textDecoration: "none", color: "#FFF"}}>
                <Button color="transparent" style={{marginRight: "3px", borderBottom: "1px solid white"}}>
                  Retailers
                </Button>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/Contact" style={{textDecoration: "none", color: "#FFF"}}>
                <Button color="transparent"style={{marginRight: "3px", borderBottom: "1px solid white"}}>
                  Contact Us
                </Button>
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          20 Alness, Unit 1
          Toronto, ON
          Canada
          <div>
            Monday - Friday:
            <div>
              9:00 am - 5:00 pm
            </div>
            <div>
              Saturday - Sunday:
              <div>
                Closed
                <div>
                  <NewReleasesIcon style={{justify: "center", marginRight: "0.5em"}}/>
                  We are not open to the public, please email for a meeting
                  <div>
                    Website under construction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>    
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
