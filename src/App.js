import './App.css';
import Header from './components/Header/header';
//import AboutUs from './components/AboutUs/AboutUs';
import About from './pages/about';

import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home';
 import Gallery from './gallery';
 import Contact from './pages/contact';

function App() {

  return (
    
    <div className="holder">
       
       {/* <Title/> */}
      <Router>
      
      <Header /> 
      
      

      <Routes>

      <Route path="/index" element={ <Home /> }/>
      <Route path="" element={ <Home /> }/>
      <Route path="/about" element={<About/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      


      </Routes>

    </Router>
    <Footer /> 
     
  
     
    </div>



  );

  
}



  


export default App;








// import './App.css';
// import Header from './components/Header/header';
// //import AboutUs from './components/AboutUs/AboutUs';
// import About from './pages/about';
// import Title from './title';
// import Index from './index';
// import React, {useState} from 'react';
// import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
// import LightGallery from 'lightgallery/react';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';



// import Contact from "./components/Contact/Contact";

// import 'bootstrap/dist/css/bootstrap.min.css';

// import { Navbar } from 'react-bootstrap';
// import Home from './pages/home';

// function App() {

//   return (
    
//     <div className="holder">
//        <LightGallery
//        speed={500}
//        plugins={[]}>
       
//         <a href="https://theme767-coffee-store.myshopify.com/cdn/shop/files/img_text_908x596_crop_top.png?v=1614334832">
//           <img className="thumbnail-img" src="https://theme767-coffee-store.myshopify.com/cdn/shop/files/img_text_908x596_crop_top.png?v=1614334832" alt="imghttps1"/></a>

//         {/* <img src={require('../components/assets/images/product1.webp')} /> */}


//        </LightGallery>
//        {/* <Title/> */}
//       <Router>
      
//       <Header /> 
      

//       <Routes>

//       <Route path="/index" element={ <Home /> }/>
//       <Route path="" element={ <Home /> }/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/title" element={<Title/>}/>
//       <Route path="/home" element={<Home/>} />
//       <Route path="/contact" element={<Contact/>} />
//       </Routes>

//     </Router>
     
  
     
//     </div>
//   );
// }



// export default App;



