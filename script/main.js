
  // 스크롤 이벤트 모음
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

  if(s_pos>=450){
    $('change > li').css({'filter':'opacity(1)','transform':'translateY(0px)'})
  }else{
    $('change > li').css({'filter':'opacity(0)','transform':'translateY(100px)'})
  }

  if(s_pos>=2300){
    $('.sub > h2').css({'filter':'opacity(1)','transform':'translateY(0px)'})
    $('.sub > p').css({'filter':'opacity(1)','transform':'translateY(0px)'})
  }else{
    $('.sub > h2').css({'filter':'opacity(0)','transform':'translateX(-150px)'})
    $('.sub > p').css({'filter':'opacity(0)','transform':'translateX(-150px)'})
  }


  // 배경 변경 등 서식 전체 일시 변경
  //if((7563>=s_pos)&&(2852<=s_pos)){
   // $('html, body').css('background','#fff');
  //  $('.logo').css('color', '#111');
  //  $('.scroll').css('background', 'rgba(0, 0, 0, .5)');
  //  $('.cur').css('background','#111');
  //  $('.mnu').css({'background':'#FBF8F1','color':'#000'});
  //}else{
  //  $('html, body').css('background','#111');
 //   $('.logo').css('color', '#f4f3ef');
  //  $('.scroll').css('background','rgba(245, 244, 240, .5)');
  //  $('.cur').css('background','#f4f3ef');
  //   $('.mnu').css({'background':'#000','color':'#fff'});
  //}

  // 디자인 페이지에서 아프리카 서서히 사라지기
  if(s_pos>=8300){
    $('.africa').css('opacity','0');
  }else{
    $('.africa').css('opacity','1');
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
  if(s_pos>=10839){
    $('.scroll').fadeOut();
    $('.top').fadeIn();
    $('.con_list > div > dl > dt').css({'transform':'translateY(0px)','filter':'opacity(1)'});
    $('.dd_tit').css({'transform':'translateY(0px)','filter':'opacity(1)'})
    $('.dd_txt').css({'transform':'translate(0px, 0px)','filter':'opacity(1)'})
  }else{
    $('.scroll').fadeIn();
    $('.top').fadeOut();
    $('.con_list > div > dl > dt').css({'transform':'translateY(100px)','filter':'opacity(0)'});
    $('.dd_tit').css({'transform':'translateY(150px)','filter':'opacity(0)'})
    $('.dd_txt').css({'transform':'translate(-150px,30px)','filter':'opacity(0)'})
  }

  // 탑버튼 위치 변경
  if(s_pos>=200){
    $('#top_btn').css({'right':'0%','transform':'translateX(0)'});
    $('.scroll').css('opacity','1');
    // $('.top_scr').css('opacity','0');
  }else{
    $('#top_btn').css({'right':'48%','transform':'translateX(-50%)'});
    $('.scroll').css('opacity','0');
    // $('.top_scr').css('opacity','1');
  }

  // 프로필 버튼
  if(s_pos>=1500){
    $('.profile_btn').fadeIn();
  }else{
    $('.profile_btn').fadeOut();
  }

  // 프로젝트 애니메이션
  if(s_pos<3168){
    $('.gre_mok').css({'left':'15%','scale':'1.7'});
    $('.greencar ul li:last-child').fadeOut(2000);
  }else{
    $('.gre_mok').css({'left':'0%','scale':'1'});
    $('.greencar ul li:last-child').fadeIn(2000);
  }

  if(s_pos<4068){
    $('.lush_mok').css({'left':'15%','scale':'1.7'});
    $('.lush ul li:last-child').fadeOut(2000);
  }else{
    $('.lush_mok').css({'left':'0%','scale':'1'});
    $('.lush ul li:last-child').fadeIn(2000);
  }

  if(s_pos<4818){
    $('.wat_mok').css({'left':'15%','scale':'1.7'});
    $('.watcha ul li:last-child').fadeOut(2000);
  }else{
    $('.wat_mok').css({'left':'0%','scale':'1'});
    $('.watcha ul li:last-child').fadeIn(2000);
  }

  if(s_pos<5718){
    $('.via_mok').css({'left':'15%','scale':'1.7'});
    $('.via ul li:last-child').fadeOut(2000);
  }else{
    $('.via_mok').css({'left':'0%','scale':'1'});
    $('.via ul li:last-child').fadeIn(2000);
  }

  if(s_pos<6540){
    $('.harim_mok').css({'left':'15%','scale':'1.7'});
    $('.harim ul li:last-child').fadeOut(2000);
  }else{
    $('.harim_mok').css({'left':'0%','scale':'1'});
    $('.harim ul li:last-child').fadeIn(2000);
  }

  if(s_pos<7374){
    $('.africa_mok').css({'left':'15%','scale':'1.7'});
    $('.africa ul li:last-child').fadeOut(2000);
  }else{
    $('.africa_mok').css({'left':'0%','scale':'1'});
    $('.africa ul li:last-child').fadeIn(2000);
  }

  if(s_pos>=9939){
    $('.contact > span').css('bottom','40%');
    $('.git').css('bottom','25%');
    $('.res').css('bottom','14%');
  }else{
    $('.contact > span').css('bottom','-10%');
    $('.git').css('bottom','-10%');
    $('.res').css('bottom','-10%');
  }

  // 디자인 페이지 일시적 고정
  if((9638>=s_pos)&&(8624<=s_pos)){
    $('.ix_fix_inner').addClass('fix');
  }else{
    $('.ix_fix_inner').removeClass('fix');
  }

  //디자인 픽스 부분 애니메이션
  if(s_pos>=6949){
    $('.ix_title > span').css({'transform':'translateY(0px)','filter':'opacity(1)'})
  }else{
    $('.ix_title > span').css({'transform':'translateY(500px)','filter':'opacity(0)'})
  }

  if(s_pos>=6928){
    $('.ix_txt').css('transform','translateX(-50%)')
  }else{
    $('.ix_txt').css('transform','translateX(-150%)')
  }

    // 디자인 페이지 일시적 고정
    if((9970>=s_pos)&&(8000<=s_pos)){
      $('.ix_move').css('background','#eee');
    }else{
      $('.ix_move').css('background','#000');
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



// 프로젝트 더보기
$('.sub > p').click(function(){
  //alert('dkdkdk');
  $('.pro_list').slideToggle();
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


// uiux
$('.ix_mnu > span').click(function(){
  // alert('ldkdkdk')
  $('.g_l').css({'left':'3%','text-align':'left'});
  $('.g_s').css({'left':'3%','text-align':'left'});
  $('.m_l').css({'left':'3%','text-align':'left'});
  $('.i_ix').css({'left':'3%','text-align':'left'});
});

$('.g_l').click(function(){
  $('.g_l_box').css('right','3%');
  $('.g_s_box').css('right','-50%');
  $('.m_l_box').css('right','-50%');
  $('.i_ix_box').css('right','-50%');
});
$('.g_s').click(function(){
  $('.g_l_box').css('right','-50%');
  $('.g_s_box').css('right','3%');
  $('.m_l_box').css('right','-50%');
  $('.i_ix_box').css('right','-50%');
});
$('.m_l').click(function(){
  $('.g_l_box').css('right','-50%');
  $('.g_s_box').css('right','-50%');
  $('.m_l_box').css('right','3%');
  $('.i_ix_box').css('right','-50%');
});
$('.i_ix').click(function(){
  $('.g_l_box').css('right','-50%');
  $('.g_s_box').css('right','-50%');
  $('.m_l_box').css('right','-50%');
  $('.i_ix_box').css('right','3%');
});
