// intro 스크롤

  // 실시간
  setInterval(function(){

    let box = $('.change');
    let move = $('.change li:first');
    let ch = ()=> {
      move.appendTo(box).show(300)
    }

    move.hide(300, ch);
    
  }, 3000);


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



  if((7563>=s_pos)&&(2100<=s_pos)){
    $('html, body').css('background','#fff');
    // $('.ix > h2').css('color', '#000');
    $('.logo').css('color', '#111');
    $('.scroll').css('background', 'rgba(0, 0, 0, .5)');
    $('.cur').css('background','#111');
    $('.mnu').css({'background':'#FBF8F1','color':'#000'});
  }else{
    $('html, body').css('background','#111');
    // $('.ix > h2').css('color', '#F4F3EF');
    $('.logo').css('color', '#f4f3ef');
    $('.scroll').css('background','rgba(245, 244, 240, .5)');
    $('.cur').css('background','#f4f3ef');
    $('.mnu').css({'background':'#000','color':'#fff'});
  }

  if(s_pos>=1000){
    $('.mnu').fadeIn();
  }else{
    $('.mnu').fadeOut();
  }

  if(s_pos>=7300){
    $('.africa').css('opacity','0');
  }else{
    $('.africa').css('opacity','1');
  }

  if(s_pos>=7713){
    $('.g_l').css('left','20%');
    $('.g_s').css('right','20%');
    $('.m_l').css('left','20%');
    $('.i_ix').css('right','20%');
  }else{
    $('.g_l').css('left','-50%');
    $('.g_s').css('right','-50%');
    $('.m_l').css('left','-50%');
    $('.i_ix').css('right','-50%');
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
  if(s_pos>=9550){
    $('.scroll').fadeOut();
    $('.top').fadeIn();
    $('.con_list > div > dl > dt').css('animation','icon 1s');
  }else{
    $('.scroll').fadeIn();
    $('.top').fadeOut();
    $('.con_list > div > dl > dt').css('animation','none');
  }

  // 탑버튼 위치 변경
  if(s_pos>=200){
    $('#top_btn').css({'right':'0%','tranform':'translateX(0)'});
    $('.scroll').css('opacity','1');
    // $('.top_scr').css('opacity','0');
  }else{
    $('#top_btn').css({'right':'48%','tranform':'translateX(-50%)'});
    $('.scroll').css('opacity','0');
    // $('.top_scr').css('opacity','1');
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

  if(s_pos>=8650){
    $('.contact > span').css('bottom','40%');
    $('.git').css('bottom','25%');
    $('.res').css('bottom','14%');
  }else{
    $('.contact > span').css('bottom','-10%');
    $('.git').css('bottom','-10%');
    $('.res').css('bottom','-10%');
  }

});

  $('#top_btn, scroll, .top').click(function(){
    $('html, body').animate({'scrollTop':'0px'},500);

  return false;
  });




// 프로필 슬라이드
const pTag1 = document.querySelector('.first-parallel')
      const pTag2 = document.querySelector('.second-parallel')
      const pTag3 = document.querySelector('.third-parallel')
      
      const textArr1 = 'im the publisher you wanted and waited for'.split(' ')
      const textArr2 = 'want to make a great homepage together'.split(' ')
      const textArr3 = "I look forward to your kind cooperation. I'll do my best".split(' ')

      let count1 = 0
      let count2 = 0
      let count3 = 0

      initTexts(pTag1, textArr1)
      initTexts(pTag2, textArr2)
      initTexts(pTag3, textArr3)

      function initTexts(element, textArray) {
        textArray.push(...textArray)
        for (let i = 0; i < textArray.length; i++) {
          element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0`
        }
      }
  
      function marqueeText(count, element, direction) {
        if (count > element.scrollWidth / 2) {
          element.style.transform = `translate3d(0, 0, 0)`
          count = 0
        }
        element.style.transform = `translate3d(${direction * count}px, 0, 0)`

        return count
      }

      function animate() {
        count1++
        count2++
        count3++

        count1 = marqueeText(count1, pTag1, -1)
        count2 = marqueeText(count2, pTag2, 1)
        count3 = marqueeText(count3, pTag3, -1)

        window.requestAnimationFrame(animate)
      }

      function scrollHandler() {
        count1 += 15
        count2 += 15
        count3 += 15
      }

      window.addEventListener('scroll', scrollHandler)
      animate()




// 프로필 더보기
$('.profile_btn').click(function(){
  // $('.pro_ment').fadeToggle();
  $('.more_pro').slideDown();
  $('.more_inner').fadeIn();
  // $('.hi_img').fadeToggle();

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

$('.pro_close').click(function(){
  $('.more_pro').slideUp();
  $('.more_inner').fadeOut();
});


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
