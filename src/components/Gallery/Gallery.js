import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../Card/Card.js";
import Parallax from '../Parallax/Parallax';

import image1 from "../../assets/img/bg4.jpg";
import image2 from "../../assets/img/bg2j.jpg";
import image3 from "../../assets/img/bg.jpg";

import styles from "./galleryStyle.js";

const useStyles = makeStyles(styles);

export default function Gallery() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div>
      <div>
        <GridContainer style={{marginBottom: "0"}}>
          <GridItem xs={12} sm={12} md={12}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                    <Parallax image={require("../../assets/img/bg4.jpg")}/>
                </div>
                <div>
                    <Parallax image={require("../../assets/img/bg4.jpg")}/>
                </div>
                <div>
                    <Parallax image={require("../../assets/img/bg4.jpg")}/>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
