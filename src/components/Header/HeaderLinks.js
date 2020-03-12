/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

//Modal
import Modal from '@material-ui/core/Modal';
import FadeMaterial from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Divider from '@material-ui/core/Divider';

// @material-ui/icons
import Store from '@material-ui/icons/Store';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Contacts from '@material-ui/icons/Contacts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewListIcon from '@material-ui/icons/ViewList';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";
import Cart from '../Cart/Cart';

import styles from "./headerLinksStyle.js";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(styles);

const HeaderLinks = ({ isAuthenticated }) => {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
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
        <Link to="/Care" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Button
            color="transparent"
            round
            className={classes.navLink}
          >
            <InfoOutlinedIcon />
            Learn
            </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/Retailers" style={{ color: 'inherit', textDecoration: 'inherit' }}>
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
        <Link to="/Contact" style={{ color: 'inherit', textDecoration: 'inherit' }}>
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
      <ListItem className={classes.listItem}>
        <Link to="/Profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Button
            color="transparent"
            round
            className={classes.navLink}
          >
            <AccountCircleIcon />
            {isAuthenticated ? 'Profile' : 'Login'}
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" round className={classes.navLink} onClick={handleOpen}>
          <ShoppingCartIcon />
          Cart
        </Button>
      </ListItem>

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
          <Cart/>
        </FadeMaterial>
      </Modal>
    </List>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(HeaderLinks);
