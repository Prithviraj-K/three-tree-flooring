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

import NextArrow from '@material-ui/icons/ArrowForwardIos';
import PrevArrow from '@material-ui/icons/ArrowBackIos';

import image1 from "../../assets/img/bg4.jpg";
import image2 from "../../assets/img/bg2j.jpg";
import image3 from "../../assets/img/bg.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <NextArrow 
      className={className}
      style={{ ...style, display: "block", color: "white", right: "2%", zIndex: "10"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <PrevArrow 
      className={className}
      style={{ ...style, display: "block", color: "white", left: "2%", zIndex: "10"}}
      onClick={onClick}
    />
  );
}

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
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
    </div>
  );
}
