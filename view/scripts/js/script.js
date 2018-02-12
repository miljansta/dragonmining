$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $('header').addClass("scrolled");
        $('main').addClass("scrolled");
    } else {
        $('header').removeClass("scrolled");
        $('main').removeClass("scrolled");
    }
});

$(document).ready(function(){
    $("#menuToggle").on("click", function(){
        $(this).toggleClass("on");
        $('navigation').toggleClass("on");
    });    
}); 
   


var sliderIndex = 1;
showDivs(sliderIndex);

function plusDivs(n) {
    showDivs(sliderIndex += n);
}

function currentDiv(n) {
    showDivs(sliderIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mainSlide");
    var dots = document.getElementsByClassName("demo-slider");
    if (n > x.length) {
        sliderIndex = 1
    }
    if (n < 1) {
        sliderIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    x[sliderIndex - 1].style.opacity = "1";
    dots[sliderIndex - 1].className += " active";
}

$(document).ready(function(){
    var timeInterval = setInterval(mySlider, 2500);

    function mySlider() {
        plusDivs(1);
    }
});




// Lightbox

// Open the Modal
function openModal() {
    document.getElementById('myModal').style.visibility = "visible";
    document.getElementById('myModal').style.opacity = "1.0";
    document.getElementById('header').classList.add("scrolled");
    
}

// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.visibility = "hidden";
    document.getElementById('myModal').style.opacity = "0.0";
    
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
//  for (i = 0; i < dots.length; i++) {
//    dots[i].className = dots[i].className.replace(" active", "");
//  }
  slides[slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " active";
//  captionText.innerHTML = dots[slideIndex-1].alt;
}