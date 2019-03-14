// Light Box
$(function(){

    // light box tilpasser sig skærmen
var scrollDis;
$('#p4').scroll(function() {
  scrollDis = $('#p4').scrollTop();  
});


// lav elementet
var $zoomBil = $('<div id="zoomBil"></div>');
var $wrap = $('<div id="wrap"></div>');
var $image = $('<img class="image">');
var $close = $('<a href="#w4" class="close">&times;</a>')

// 
$zoomBil.append($wrap);
$wrap.append($image);
$wrap.append($close);
$('#w4').append($zoomBil);

// click event
$('#galleri').on('click', 'a', function(evnet){
  event.preventDefault();

  var imageSrc = $(this).attr('href');
  $image.attr('src', imageSrc);

  $zoomBil.show();
})
// click event for close.
$close.click(function(){
  $zoomBil.hide();
})
});