// intro 스크롤
  const port = $('.port');
  const hi = $('.hi');
  const web = $('.web');

  $(window).scroll(function(){
    let s_pos = $(this).scrollTop();
    console.log(s_pos);

  // 해상도 안내
  if(s_pos>=1){
    $('.info').fadeOut();
  }else{
    $('.info').fadeIn();
  }

  // uiux 디자인 위 색상, 디자인 변경
  if(200<=s_pos) {
    $('.scroll').css('background', 'rgba(245, 244, 240, .5)');
  }else{
    $('.scroll').css('background', 'none');
  }

  if(s_pos>=7000){
    $('html, body').css('background','#F4F3EF');
    $('.africa').css('opacity','0');
    // $('.ix > h2').css('color', '#000');
    $('.logo').css('color', '#000');
    $('.scroll').css('background','rgba(0, 0, 0, .5)');
    $('.cur').css('background','#000');
  }else{
    $('html, body').css('background','#000');
    $('.africa').css('opacity','1');
    // $('.ix > h2').css('color', '#F4F3EF');
    $('.logo').css('color', '#F4F3EF');
    $('.scroll').css('background', 'rgba(245, 244, 240, .5)');
    $('.cur').css('background','#f4f3ef');
  }

    // 클론코딩 메뉴 임시 고정
    if((7335>=s_pos)&&(5514<=s_pos)){
      $('.clone > h2').addClass('on2');
    }else{
      $('.clone > h2').removeClass('on2');
    }

  // 로고 페이드인,아웃
  if(s_pos>=900){
    $('.logo').fadeIn();
  }else{
    $('.logo').fadeOut();
  }

  // 푸터 천천히 보이기
  if(s_pos>=7147){
    $('.foot_inner').css('opacity','1');
  }else{
    $('.foot_inner').css('opacity','0');
  }

  // 탑버튼 스크롤에 따라 변경
  if(s_pos>=8271){
    $('.scroll').fadeOut();
    $('.top').fadeIn();
    $('.mail, .phone').css('right','1%');
  }else{
    $('.scroll').fadeIn();
    $('.top').fadeOut();
    $('.mail, .phone').css('right','-30%');
  }

  // 탑버튼 위치 변경
  if(s_pos>=200){
    $('#top_btn').css({'right':'0%','tranform':'translateX(0)'});
    $('.scroll').css('opacity','1');
    $('.top_scr').css('opacity','0');
  }else{
    $('#top_btn').css({'right':'48%','tranform':'translateX(-50%)'});
    $('.scroll').css('opacity','0');
    $('.top_scr').css('opacity','1');
  }

  // 프로젝트 애니메이션
  if(s_pos<1838){
    $('.gre_mok').css({'left':'15%','scale':'1.7'});
    $('.greencar ul li:last-child').fadeOut(2000);
  }else{
    $('.gre_mok').css({'left':'0%','scale':'1'});
    $('.greencar ul li:last-child').fadeIn(2000);
  }

  if(s_pos<2757){
    $('.lush_mok').css({'left':'15%','scale':'1.7'});
    $('.lush ul li:last-child').fadeOut(2000);
  }else{
    $('.lush_mok').css({'left':'0%','scale':'1'});
    $('.lush ul li:last-child').fadeIn(2000);
  }

  if(s_pos<3676){
    $('.wat_mok').css({'left':'15%','scale':'1.7'});
    $('.watcha ul li:last-child').fadeOut(2000);
  }else{
    $('.wat_mok').css({'left':'0%','scale':'1'});
    $('.watcha ul li:last-child').fadeIn(2000);
  }

  if(s_pos<4595){
    $('.via_mok').css({'left':'15%','scale':'1.7'});
    $('.via ul li:last-child').fadeOut(2000);
    // $('.sub').show();
  }else{
    $('.via_mok').css({'left':'0%','scale':'1'});
    $('.via ul li:last-child').fadeIn(2000);
  }

});

  $('#top_btn, scroll, .top').click(function(){
    $('html, body').animate({'scrollTop':'0px'},500);

  return false;
  });




// 프로필 더보기
$('.pro_in_down').click(function(){
  $('.pro_ment').fadeToggle();
  $('.more_pro').fadeToggle();
  $('.hi_img').fadeToggle();

  $('.bar1').css('width', '90%');
  $('.bar2').css('width', '90%');
  $('.bar3').css('width', '45%');
  $('.bar4').css('width', '65%');
  $('.bar5').css('width', '80%');
  $('.bar6').css('width', '60%');
  $('.bar7').css('width', '85%');
  $('.bar8').css('width', '80%');
  $('.bar9').css('width', '75%');
  $('.bar10').css('width', '90%');
  $('.bar11').css('width', '80%');
});




// contact
// const p_btn = $('.contact > div > span:first-child');
// const k_btn = $('.contact > div > span:nth-child(2)');
// const e_btn = $('.contact > div > span:last-child');

// p_btn.click(function(){
//   $('.contact > .a > span:first-child').css('opacity','1');
//   $('.contact > .a > span:nth-child(2)').css('opacity','0');
//   $('.contact > .a > span:last-child').css('opacity','0');
// });
// k_btn.click(function(){
//   $('.contact > .a > span:first-child').css('opacity','0');
//   $('.contact > .a > span:nth-child(2)').css('opacity','1');
//   $('.contact > .a > span:last-child').css('opacity','0');
// });
// e_btn.click(function(){
//   $('.contact > .a > span:first-child').css('opacity','0');
//   $('.contact > .a > span:nth-child(2)').css('opacity','0');
//   $('.contact > .a > span:last-child').css('opacity','1');
// });


// 클론 탭메뉴
let tab_btn = $('.clone_inner > ul > li > button')

tab_btn.click(function(){
  // alert('dkdkdk');
  $(this).next().fadeIn().parent().siblings().find('div').fadeOut();
  $(this).addClass('btn_cli').parent().siblings().find('button').removeClass('btn_cli');
});


let hpc_btn = $('.harim > ul > li:first-child > button');
let htab_btn = $('.harim > ul > li:nth-child(2) > button');
let hmob_btn = $('.harim > ul > li:last-child > button');

hpc_btn.click(function(){
  $('.harim .c_pc_screen > img').delay(500).animate({'top':'-689px'},3000);
  $('.harim .c_tab_screen > img').animate({'top':'0px'},100);
  $('.harim .c_mobile_screen > img').animate({'top':'0px'},100);
});
htab_btn.click(function(){
  $('.harim .c_pc_screen > img').animate({'top':'0px'},100);
  $('.harim .c_tab_screen > img').delay(500).animate({'top':'-541px'},3000);
  $('.harim .c_mobile_screen > img').animate({'top':'0px'},100);
});
hmob_btn.click(function(){
  $('.harim .c_pc_screen > img').animate({'top':'0px'},100);
  $('.harim .c_tab_screen > img').animate({'top':'0px'},100);
  $('.harim .c_mobile_screen > img').delay(500).animate({'top':'-774px'},4000);
});

let apc_btn = $('.africa > ul > li:first-child > button');
let amob_btn = $('.africa > ul > li:last-child > button');

apc_btn.click(function(){
  $('.africa .c_pc_screen > img').delay(500).animate({'top':'-79px'},1000);
  $('.africa .c_mobile_screen > img').animate({'top':'0px'},100);
});
amob_btn.click(function(){
  $('.africa .c_pc_screen > img').animate({'top':'0px'},100);
  $('.africa .c_mobile_screen > img').delay(500).animate({'top':'-46px'},1000);
});




// 풀페이지
window.onload = function () {
  $('.box').eq(0).addClass('move');
    var elm = ".box";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                        $(elmSelecter).next().addClass('move'); //  휠 내렸을시 애니메이션 이벤트
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                        
                    }catch(e){}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
    
    $(window).resize(function(){
      $('.box').css('height',$(window).height());
    });
  }
