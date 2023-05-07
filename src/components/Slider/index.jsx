/* eslint-disable react/prop-types */
import React from "react";
import Slider from "react-slick";

import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const Carousel = ({ children, items=3, scroll=1 }) => {
  const settings = {
    // dots: true,
    className: "slider__container",
    infinite: true,
    speed: 500,
    slidesToShow: items,
    slidesToScroll: scroll,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <span className={className} onClick={onClick}>
      <HiOutlineArrowNarrowRight size={20} color="000" />
    </span>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <span className={className} onClick={onClick}>
      <HiOutlineArrowNarrowLeft size={20} color="000" />
    </span>
  );
}
