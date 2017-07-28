console.log("ovo radi")

/*var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200,
  columnHeight: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});*/



// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  



$(document).ready(function(){

$('.center').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
   dots: true,
   autoplay: true,
  autoplaySpeed: 2000,

});


//overlay prek slk
var sizeTheOverlays = function() {
    $(".overlay").resize().each(function() {
    var h = $(this).parent().outerHeight();
    var w = $(this).parent().outerWidth();
    $(this).css("height", h);
    $(this).css("width", w);
  });
};

sizeTheOverlays();


var width = $(window).width();
$(window).resize(function(){
   if($(this).width() != width){
      width = $(this).width();
      sizeTheOverlays();
   }
});

/*
  $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
**/
  
});