import React, { Component } from 'react';
import Slider from 'react-slick'
import '../assets/images/rezultat1.png';
import '../assets/images/rezultat2.png';
import '../assets/images/rezultat3.png';
import '../assets/images/rezultat4.png';
import '../assets/images/rezultat5.png';
import '../assets/images/rezultat6.png';

export default class SimpleSlider extends Component {
  render () {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 5000,
    };
    return (
      <Slider {...settings}>
        <div>
          <img className='slick-slide' alt='' src='images/rezultat1.png' />
        </div>
        <div>
          <img className='slick-slide' alt='' src='images/rezultat2.png' />
        </div>
        <div>
          <img className='slick-slide' alt='' src='images/rezultat3.png' />
        </div>
        <div>
          <img className='slick-slide' alt='' src='images/rezultat4.png' />
        </div>
        <div>
          <img className='slick-slide' alt='' src='images/rezultat5.png' />
        </div>
        <div>
          <img className='slick-slide' alt='' src='images/rezultat6.png' />
        </div>
      </Slider>
    );
  }
}
