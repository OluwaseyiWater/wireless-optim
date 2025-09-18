// static/js/slideshow.js
document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots   = document.getElementsByClassName("dot");

    // hide everything
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // advance index
    slideIndex = (slideIndex + 1) > slides.length ? 1 : slideIndex + 1;

    // clear all active dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    // show the new slide + dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // loop
    setTimeout(showSlides, 4000);
  }
});
