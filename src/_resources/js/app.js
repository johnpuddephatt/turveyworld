"use strict";
const imagesLoaded = require('imagesLoaded');
const aos = require( "./components/aos" );

const gallery = document.querySelector('.section--gallery');

if(gallery) {
  gallery.style.visibility = 'hidden';
  imagesLoaded( gallery, function( instance ) {
    setTimeout(()=> {
      gallery.style.visibility = 'visible';
      aos('.fades-in','faded-in');
    }, 500);
  });
}
else {
  aos('.fades-in','faded-in');
}

