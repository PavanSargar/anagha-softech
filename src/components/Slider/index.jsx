/* eslint-disable react/prop-types */
import React from "react";
import Slider from "react-slick";

import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const Carousel = ({
  children,
  items = 3,
  scroll = 1,
  indicator = false,
  autoScroll = false,
  autoplaySpeed=2000
}) => {
  const settings = {
    // dots: true,
    className: "slider__container",
    infinite: true,
    speed: 500,
    slidesToShow: items,
    slidesToScroll: scroll,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: autoScroll,
    autoplaySpeed,
    responsive: [
      {
        breakpoint: 1268,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
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
          dots: indicator,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: indicator,
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
