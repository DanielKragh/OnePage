// Light Box
$(function(){

    // light box tilpasser sig skærmen
var scrollDis;
$('#p2, #p4').scroll(function() {
  scrollDis = $('#p2, #p4').scrollTop();  
});


// lav elementet
var $zoomBil = $('<div id="zoomBil"></div>');
var $divRe = $('<div style="position:relative"></div>')
var $wrap = $('<div id="wrap"></div>');
var $image = $('<img class="image">');
var $text = $('<p id="billedText"></p>');
var $close = $('<a href="#w4" class="close">&times;</a>')

// 
$zoomBil.append($divRe);
$divRe.append($wrap);
$wrap.append($image);
$wrap.append($text);
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