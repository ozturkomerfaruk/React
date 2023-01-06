import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselExample() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/la.jpg"
          alt="Los Angeles"
        />
        <Carousel.Caption>
          <h3>Los Angeles</h3>
          <p>We had such a great time in LA!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/chicago.jpg"
          alt="Chicago"
        />
        <Carousel.Caption>
          <h3>Chicago</h3>
		  <p>Thank you, Chicago!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/ny.jpg"
          alt="New York"
        />
        <Carousel.Caption>
          <h3>New York</h3>
		  <p>We love the Big Apple!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
