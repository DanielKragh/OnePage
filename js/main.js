$(function () {


  // navigation
  var i = $('nav i.fa-bars');
  var nav = i.parent();

  $(window).on('resize', function () {
    nav.removeClass('show-nav');
  })
  $('#en, #to, #tre, #fire').on('click', function () {
    nav.removeClass('show-nav');
  });

  $('#en, #tre, #to, #fire').on('click', function () {
    nav.addClass('show-nav-dark');

  });





  i.on('click', function () {
    nav.toggleClass('show-nav');
    nav.toggleClass('show-nav-dark')
  });

  $(function () {
    var hash = window.location.hash;
    if (hash == '#w3') {
      nav.addClass('show-nav-dark');
    }
    if (hash == '#w2') {
      nav.addClass('show-nav-dark');
    }
    if (hash == '#w4') {
      nav.addClass('show-nav-dark');
    };
    if (hash == '#w1') {
      nav.addClass('show-nav-dark');
    }
  })

  // forside side slider
  $(".slide-left").click(function () {
    $(".contact").addClass('show');
  });
  $('.slide-right').click(function () {
    $('.contact').removeClass('show');
  });
  $('#en, #to, #tre, #fire').click(function () {
    $('.contact').removeClass('show');
  });

  // Artikel side slide
  $(".slide-left-a1").click(function () {
    $(".ekstra-side-a1").addClass('show');
    $("#p2").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $('.slide-right').click(function () {
    $(".slide-right").css({
      'position': 'absolute'
    });
    $('.ekstra-side-a1').removeClass('show');
  });
  $(".slide-left-a2").click(function () {
    $(".ekstra-side-a2").addClass('show');
    $("#p2").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $('.slide-right').click(function () {
    $('.ekstra-side-a2').removeClass('show');
  });
  // scoll up
  $('.fa-angle-up').on('click', function () {
    $("#p2, .contact").animate({
      scrollTop: 0
    }, "slow");
    return false;
  })


  // scroll Down
  $(".next a").click(function (e) {
    e.preventDefault();

    var thisLink = $(this);
    var thisHref = thisLink.attr('href');
    var thisTarget = $(thisHref);
    var thisTop = thisTarget.offset().top;

    $("#p3").animate({
      scrollTop: thisTop
    }, 1000);
  });

  // video
  var vid = document.getElementById("video");
  vid.playbackRate = 0.5;

});