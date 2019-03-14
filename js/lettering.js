$(function(){
    "use strict";
    var art = $(".lettering1");
    art.lettering("words");
    var char = art.children();

    var allChar = art.find('span');

    $(".letter").on('click', function(e){
        var thisLink = $(this);
        var className = thisLink.attr('data-ani');
        e.preventDefault();
        aniText(allChar,className);
    });

    function aniText(elm,className){
        elm.each(function(index, e){
            $(e).removeClass();
            setTimeout(function(){
                $(e).addClass('animated '+className)
            }, 100 * index);
        });
    } 
});