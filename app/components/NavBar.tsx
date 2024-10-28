'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import * as S from '../styles/NavBarCss';

function NavBar() {
  const router = useRouter();

  function goToMyPage() {
    router.push('/MyPage');
  }

  function goToMainPage() {
    router.push('/Main');
  }

  function goToDoor1Page() {
    router.push('/DoorCloth1');
  }

  return (
    <>
      <S.NavTmfdiv>
        <S.HompageIcon onClick={goToMainPage} src={'/sumsum.png'} alt="시발" />

        <S.NavText>
          <S.NavTexts onClick={goToDoor1Page}>건의 작성</S.NavTexts>
          <S.NavTexts onClick={goToMyPage}>마이페이지</S.NavTexts>  
          <S.NavTexts>사이트 소개 </S.NavTexts>
        </S.NavText>

        <S.NavLogOut>
          <S.NavLogOutText>로그아웃</S.NavLogOutText>
        </S.NavLogOut>
      </S.NavTmfdiv>
    </>
  );
}

export default NavBar;
