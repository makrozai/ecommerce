$(document).ready(function(){
  $('.slider').slider();
  $('select').material_select();
  $('ul.tabs').tabs();


  $("#productList").pinto({
    itemWidth:250,
    gapX:30,
    gapY:30,
  });


  $("#product-img").elevateZoom({
    gallery:'product-gallery', 
    cursor: 'pointer', 
    galleryActiveClass: 'active', 
    imageCrossfade: true, 
    loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
  }); 

  //pass the images to Fancybox
  $("#product-img").bind("click", function(e) {  
    var ez =   $('#product-img').data('elevateZoom'); 
    $.fancybox(ez.getGalleryList());
    return false;
  });
});