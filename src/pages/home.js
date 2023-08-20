import React from 'react';
import Gallery from '../gallery';
import { Carousel } from 'react-bootstrap';
import CarouselBootstrap from './section/carouselBootstrap';


const Home = () => {
return (
	<div className="container">
		<div className="row row-section center-item">
			<div className="col-md-6">

				<img src={require('../components/assets/images/product1.webp') } />
   

			</div>
			<div className="col-md-6 new-arrival-txt ">
				<h4>EXPLORE NEW ARRIVALS</h4>
				<h2>FIND YOUR FAVOURITE TEA</h2>
				<p>The Dukes Espresso Blend is our staple , which we have developed since 2008. It is a strong blend that’s consistent year-round in its complexity, balance, body and flavour profile. It is sweet, versatile and complex, designed to be enjoyed black and with milk.</p>

				<Gallery/>

			</div>

		</div>

		<div className="row row-section center-item">
			<div className='col-md-6 '>
				<h4>MENU</h4>
				<h2>DELIGHT JOURNEY OF FLAVORS</h2>
				<p>Indulge in a delightful journey of flavors at our coffee shop. Explore our carefully crafted menu, featuring rich brews, delectable pastries, and refreshing beverages. Welcome to a world of taste!</p>


			</div>
			<div className='col-md-6'>
				<CarouselBootstrap/>
			</div>

		</div>

		
		
	

	</div>//<!--main conatiner-->

	
);
};



export default Home;
