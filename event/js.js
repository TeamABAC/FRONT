// 첫 번째 <h1> 요소를 선택합니다.
const title1 = document.querySelector('div.hi h1');
// 두 번째 <h1> 요소를 선택합니다.
const title2 = document.querySelector('div.hello h1');
// 세 번째 <h1> 요소를 선택합니다.
const title3 = document.querySelector('div.mypage h1');

// 첫 번째 <h1> 요소에 대한 이벤트 핸들러
function handleMouseEnter1() {
  title1.innerText = 'mouse enter';
}

function handleMouseLeave1() {
  title1.innerText = '신문고';
}

// 두 번째 <h1> 요소에 대한 이벤트 핸들러
function handleMouseEnter2() {
  title2.innerText = 'mouse enter';
}

function handleMouseLeave2() {
  title2.innerText = '팀소개';
}

// 세 번째 <h1> 요소에 대한 이벤트 핸들러
function handleMouseEnter3() {
  return
  (
    console.log('he');
    title3.innerText = '마이페이지';
  )
}

function handleMouseLeave3() {
  title3.innerText = 'hee';
}

// 첫 번째 <h1> 요소에 이벤트 리스너 추가
title1.addEventListener('mouseenter', handleMouseEnter1);
title1.addEventListener('mouseleave', handleMouseLeave1);

// 두 번째 <h1> 요소에 이벤트 리스너 추가
title2.addEventListener('mouseenter', handleMouseEnter2);
title2.addEventListener('mouseleave', handleMouseLeave2);

// 세 번째 <h1> 요소에 이벤트 리스너 추가
title3.addEventListener('mouseenter', handleMouseEnter3);
title3.addEventListener('mouseleave', handleMouseLeave3);
