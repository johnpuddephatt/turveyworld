"use strict";
require('intersection-observer');
require('./components/foreach-shim');

const imagesLoaded = require('imagesLoaded');
const aos = require( "./components/aos" );

const gallery = document.querySelector('.section--gallery');

if(gallery !== null) {
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

document.getElementById('nav-trigger').checked = false;
