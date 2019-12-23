/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "./footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <ScrollAnimation animateIn="flipInX" animateOnce>
      <footer className={footerClasses}>
        <div className={classes.container}>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a
                  className={classes.block}
                  target="_blank"
                >
                  Hardwood
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  className={classes.block}
                  target="_blank"
                >
                  Wall Panelling
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  className={classes.block}
                  target="_blank"
                >
                  Care & Maintenance
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  className={classes.block}
                  target="_blank"
                >
                  Contact Us
                </a>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ScrollAnimation>
    
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
