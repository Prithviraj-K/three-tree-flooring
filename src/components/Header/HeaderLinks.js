/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Store from '@material-ui/icons/Store';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Contacts from '@material-ui/icons/Contacts';

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "./headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Button
                color="transparent"
                round
                className={classes.navLink}
              >
                <HomeIcon />
                Home
              </Button>
            </Link>
        </ListItem>

        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Products"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={MenuBookIcon}
            dropdownList={[
              <Link to="/Hardwood" className={classes.dropdownLink}>
                Engineered White Oak Hardwood
              </Link>,
              <Link to="/Care" className={classes.dropdownLink}>
                Care & Maintenance
              </Link>,
            ]}
          />
        </ListItem>

        <ListItem className={classes.listItem}>
          <Link to="/Retailers" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Button
              color="transparent"
              round
              className={classes.navLink}
            >
              <Store />
              Retailers
            </Button>
          </Link>
        </ListItem>

        <ListItem className={classes.listItem}>
            <Link to="/Contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Button
                color="transparent"
                round
                className={classes.navLink}
              >
                <Contacts />
                  Contact Us
              </Button>
            </Link>
        </ListItem>
      
      {/*<ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>*/}
    </List>
  );
}
