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

  $('#to, #fire').on('click', function () {
    nav.addClass('show-nav-dark toggle');

  });

  $('#en, #tre').on('click', function () {
    nav.removeClass('toggle');
  });


  nav.addClass('show-nav-white');

  i.on('click', function () {
    nav.toggleClass('show-nav');
    if (nav.hasClass('toggle')) {
      if (nav.hasClass('show-nav-dark')) {
        console.log(this)
        nav.addClass('show-nav-white').removeClass('show-nav-dark');
      } else {
        nav.removeClass('show-nav-white').addClass('show-nav-dark');
      }
    } else {
      if (nav.hasClass('show-nav-dark')) {
        console.log(this)
        nav.removeClass('show-nav-dark');
      } else {
        nav.removeClass('show-nav-white').addClass('show-nav-dark');
      }
    };
  });
  
  $(function () {
    var hash = window.location.hash;
    console.log(hash)
    if (hash == '#w3') {
      nav.addClass('show-nav-white');
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
    $(".om-huset").addClass('show');
  });
  $('.slide-right').click(function () {
    $('.om-huset').removeClass('show');
  });
  $('#en, #to, #tre, #fire').click(function () {
    $('.om-huset').removeClass('show');
  });

  // Artikel side slide
  $(".slide-left-a1").click(function () {
    $(".ekstra-side-a1").addClass('show');
  });
  $('.slide-right').click(function () {
    $('.ekstra-side-a1').removeClass('show');
  });
  $(".slide-left-a2").click(function () {
    $(".ekstra-side-a2").addClass('show');
  });
  $('.slide-right').click(function () {
    $('.ekstra-side-a2').removeClass('show');
  });

  // scroll Up
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