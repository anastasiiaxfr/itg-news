(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  // navigation
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 1) {
      $('.navigation').addClass('nav-bg');
    } else {
      $('.navigation').removeClass('nav-bg');
    }
  });


  //  Search Form Open
  $('#search-query').on('keyup', function () {
    if($(this).val().length > 0) {
      $('#searchClose').show();
    } else {
      $('#searchClose').hide();
    }
  });
  $('#searchClose').on('click', function () {
    $('#search-query').val("");
    $(this).hide();
  });

  // Share
  $('.share__close').click(function() {
    $(this).hide();
    $(this).parent().parent().find('.share__menu').hide();
    $(this).parent().parent().find('.share__open').show();
    $(this).parent().parent().parent().find('.btn--bd').show();
  });

  $('.share__open').click(function() {
    $(this).hide();
    $(this).parent().parent().find('.share__close').show();
    $(this).parent().parent().parent().find('.btn--bd').hide();
    $(this).parent().parent().find('.share__menu').css('display', 'flex');
  });
  
 
  //Cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  function removeCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
  }

  // Switcher
  $('.toogle-col input[type=checkbox]').change(function() {
    if ($(this).is(':checked')) {
    // $(this).addClass("active");
    $('.items-row').removeClass("d-none").addClass("d-block");
    $('.items-col').removeClass("d-block").addClass("d-none");
    } else {
      // $(this).removeClass("active");
      $('.items-row').removeClass("d-block").addClass("d-none");
      $('.items-col').removeClass("d-none").addClass("d-block");
    }
  });


    if (getCookie("theme") === "dark") {
      $('body').addClass("dark");
      $('.toogle-theme input[type=checkbox]').prop('checked', true);
    } else {
      $('body').removeClass("dark");
      $('.toogle-theme input[type=checkbox]').prop('checked', false);
    }
  
    $('.toogle-theme input[type=checkbox]').change(function() {
      if ($(this).is(':checked')) {
        $('body').addClass("dark").removeClass("light");
        setCookie("theme", "dark", 365);
      } else {
        $('body').removeClass("dark").addClass("light");
        removeCookie("theme");
        setCookie("theme", "light", 365);
      }
    });
 

  // clients logo slider
  // $('.client-logo-slider').slick({
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   dots: false,
  //   arrows: false,
  //   responsive: [{
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });


  // match height
  $(function () {
    $('.match-height').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
    });
  });

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

  // Magnific Popup Image
  $('.popup-image').magnificPopup({
    type: 'image',
    titleSrc: 'title',
    removalDelay: 160, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    closeOnContentClick: true,
    midClick: true,
    fixedContentPos: true,
    fixedBgPos: true,
    gallery: {
      enabled: true,
      preload: [0, 2], // read about this option in next Lazy-loading section
      navigateByImgClick: true,
      arrowMarkup: '<button type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
    }
  });

})(jQuery);