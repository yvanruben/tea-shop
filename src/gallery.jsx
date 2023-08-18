import React from 'react'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery() {
  return (
    <div>
      
       <div className="holder">
       <LightGallery
       speed={500}
       plugins={[]}>
       
        <a href="https://i.ibb.co/3z2pr4M/Halpe-tea.jpg" alt="img1">
          {/* <img className="thumbnail-img" src="https://theme767-coffee-store.myshopify.com/cdn/shop/files/img_text_908x596_crop_top.png?v=1614334832" alt="imghttps1"/> */}
          <button class="btn btn-secondary">View Gallery</button>
          </a>
          <a href="https://i.ibb.co/WycC7fc/Halo-Blooming-Tea.jpg"></a>
          <a href="https://i.ibb.co/T1KQ93K/linden.jpg"></a>

        {/* <img src={require('../components/assets/images/product1.webp')} /> */}


       </LightGallery>
      
    </div>
    </div>
  )
}


export default Gallery;