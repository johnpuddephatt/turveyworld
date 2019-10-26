"use strict";

module.exports = function (scrollItemSelector,scrollItemVisibleClass) {
  var options = {
    threshold: [0.25],
  };

  var images = document.querySelectorAll(scrollItemSelector);

  var callback =  function(entries, observer) {
    entries.forEach(entry => {
      console.log(entry.intersectionRatio);
      if(entry.intersectionRatio >= 0.25) {
        entry.target.classList.add(scrollItemVisibleClass);
        observer.unobserve(entry.target);
      }

    });
  }

  var observer = new IntersectionObserver(callback, options);

  images.forEach(image => {
    observer.observe(image);
  });

}