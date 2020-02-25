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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewListIcon from '@material-ui/icons/ViewList';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

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
            buttonIcon={ViewListIcon}
            dropdownList={[
              <Link to="/Hardwood" className={classes.dropdownLink}>
                Engineered White Oak Hardwood
              </Link>,
              <Link to="/Panels" className={classes.dropdownLink}>
                Versailles Panels
              </Link>,
              /*
                <Link to="/Accessories" className={classes.dropdownLink}>
                  Accessories
                </Link>
              */
            ]}
          />
        </ListItem>
        {/*
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Learn"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={MenuBookIcon}
            dropdownList={[
              <Link to="/Care" className={classes.dropdownLink}>
                Care & Maintenance
              </Link>,
              <Link to="/Docs" className={classes.dropdownLink}>
                Documents
              </Link>,
            ]}
          />
        </ListItem>
          */}
        <ListItem className={classes.listItem}>
          <Link to="/Care" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Button
              color="transparent"
              round
              className={classes.navLink}
            >
              <InfoOutlinedIcon/>
              Learn
            </Button>
          </Link>
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
        {/*
        <ListItem className={classes.listItem}>
            <Link to="/Login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Button
                color="transparent"
                round
                className={classes.navLink}
              >
                <AccountCircleIcon />
                  Login
              </Button>
            </Link>
        </ListItem>
        */}
    </List>
  );
}
