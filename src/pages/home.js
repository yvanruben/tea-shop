import React from 'react';
import Gallery from '../gallery';


const Home = () => {
return (
	<div className="container">
		<div className="row row-section center-item">
			<div className="col-md-6">

	<img src={require('../components/assets/images/product1.webp')} />
   

			</div>
			<div className="col-md-6 ">
				<h4>EXPLORE NEW ARRIVALS</h4>
				<h3>FIND YOUR FAVOURITE TEA</h3>
				<p>The Dukes Espresso Blend is our staple , which we have developed since 2008. It is a strong blend that’s consistent year-round in its complexity, balance, body and flavour profile. It is sweet, versatile and complex, designed to be enjoyed black and with milk.</p>

				<Gallery/>

			</div>

		</div>

		
		
	

	</div>
);
};



export default Home;
