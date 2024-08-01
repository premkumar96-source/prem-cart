import React from "react";
import { Carousel } from "react-bootstrap";
import vijay1 from "../assets/Movie.jpg";
import vijay from "../assets/vijay.jpg";
import cashew from "../assets/cashew.jpg";
import cashew2 from "../assets/cashew2.jpg";
import cashew4 from "../assets/cashew4.jpg";

const CarouselBanner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={cashew} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cashew4} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cashew2} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBanner;
