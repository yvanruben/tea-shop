import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

import images from "../../constants/images";


export const CarouselBootstrap =()=>{
	
	return(
		

			<div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-200" src={images.product1} alt="Image One"/>
          <Carousel.Caption>
            {/* <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
        <img className="d-block w-200" src={images.product1} alt="Image One"/>

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

