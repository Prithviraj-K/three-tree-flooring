import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// core components
import Parallax from '../Parallax/Parallax';

import NextArrow from '@material-ui/icons/ArrowForwardIos';
import PrevArrow from '@material-ui/icons/ArrowBackIos';

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
    speed: 1000,
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
          <Parallax image={require("../../assets/img/bg.jpg")}>
            
          </Parallax>
        </div>
        <div>
          <Parallax image={require("../../assets/img/bg2.jpg")}>
            
          </Parallax>
        </div>
        <div>
          <Parallax image={require("../../assets/img/bg3.jpg")}/>
        </div>
        <div>
          <Parallax image={require("../../assets/img/bg4.jpg")}/>
        </div>
        <div>
          <Parallax image={require("../../assets/img/bg5.jpg")}/>
        </div>
      </Carousel>
    </div>
  );
}
