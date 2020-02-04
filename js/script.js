  // ページスクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

//   //ページトップへもどる
//   $('#js-pageTop').on('click', function () {
//     $('body,html').animate({
//       scrollTop: 0
//     }, 300);
//     return false;
//   });



// $(function() {
//   var $allMsg = $('.hero__subtitle');
//   var $wordList = $('.hero__subtitle').html().split("");
//   $('.hero__subtitle').html("");
//   $.each($wordList, function(idx, elem) {
//       var newEL = $("<span/>").text(elem).css({ opacity: 0 });
//       newEL.appendTo($allMsg);
//       newEL.delay(idx * 70);
//       newEL.animate({ opacity: 1 }, 1100);
//   });
// });


$(function() {
  var $allMsg = $('.hero__title');
  var $wordList = $('.hero__title').html().split("");
  $('.hero__title').html("");
  $.each($wordList, function(idx, elem) {
      var newEL = $("<span/>").text(elem).css({ opacity: 0 });
      newEL.appendTo($allMsg);
      newEL.delay(idx * 70);
      newEL.animate({ opacity: 1 }, 1100);
  });
});

// $(function() {
//   var $allMsg = $('.logo-desc');
//   var $wordList = $('.logo-desc').html().split("");
//   $('.logo-desc').html("");
//   $.each($wordList, function(idx, elem) {
//       var newEL = $("<span/>").text(elem).css({ opacity: 0 });
//       newEL.appendTo($allMsg);
//       newEL.delay(idx * 70);
//       newEL.animate({ opacity: 1 }, 1100);
//   });
// });

$(window).scroll(function (){
  $('.fadein').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('scrollin');
          }
      });
  });
  
// });

$('.single').slick({
  autoplay: true, //自動再生
});

(function($) {
  $(function() {
      var $header = $('.header');
      // Nav Fixed
      $(window).scroll(function() {
          if ($(window).scrollTop() > 350) {
              $header.addClass('fixed');
          } else {
              $header.removeClass('fixed');
          }
      });
      // Nav Toggle Button
      $('.nav-toggle').click(function(){
          $header.toggleClass('open');
      });

      $('.g-nav__item').click(function(){
        $header.toggleClass('open');
    });
  });
})(jQuery);

$(function(){
  $(window).scroll(function (){
    $(".fadein").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });
});
