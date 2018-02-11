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
    $(".terminOpen").on("click", function(){
        $(".termin-overlay").addClass("on");
        $("body").addClass("no-scroll");
        $("html").addClass("no-scroll");
    });
    
}); 
   


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);
}