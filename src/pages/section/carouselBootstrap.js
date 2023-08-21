import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

import images from "../../constants/images";


export const CarouselBootstrap =()=>{
	
	return(
		

			<div>
      <Carousel>
        <Carousel.Item interval={4500}>
          <img className="d-block w-200" src={images.bread} alt="Image One"/>
          <Carousel.Caption>
            {/* <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4500}>
        <img className="d-block w-200" src={images.tea} alt="Image One"/>

          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>





        <Carousel.Item interval={4500}>
        <img className="d-block w-200" src={images.burger} alt="Image One"/>

          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4500}>
        <img className="d-block w-200" src={images.pancake} alt="Image One"/>

          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
		
		    </div>

		
		
	
	);

}

export default CarouselBootstrap;

