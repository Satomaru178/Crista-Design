'use strict';

{
  $(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $('.menu-btn, #nav a').on('click', function () {
      $('.menu-btn, #nav').toggleClass('open');
    });

     /*=================================================
    スムーススクロール
    ===================================================*/
    $('a[href^="#"]').click(function(){
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });
  });
}
