'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from '../styles/MainCss';

function Main() {
  const router = useRouter();

  function gotoDoor1() {
    router.push('/DoorCloth1');
  };

  function gotoMypage(){
    router.push('/MyPage')
  }

  function goToEveryData() {
    router.push('/EveryData')
  }
  return (
    <>
      <NavBar />

      <S.MainBodyDiv>
        <S.BackgroundImage src={'/Mainbackground.png'} alt="시발 오류 떴데요" />

        <S.NoticeTmfDiv>
          <S.NoticeText>공지사항</S.NoticeText>
        </S.NoticeTmfDiv>

        <S.MainBodyBlueStick />

        <S.MainMenu>

          <S.MainMenus onClick={gotoDoor1}>
            <S.MenuIconBlue>
              <S.MenuIcon src={'/icon1.png'} alt="시발븅신새끼" />
            </S.MenuIconBlue>
            <S.MenuText>건의 작성</S.MenuText>
          </S.MainMenus>

          <S.MainMenus onClick={goToEveryData}>
            <S.MenuIconBlue>
              <S.MenuIcon src={'/icon3.png'} alt="시발 좆같네" />
            </S.MenuIconBlue>
            <S.MenuText>건의 게시판</S.MenuText>
          </S.MainMenus>

          <S.MainMenus>
            <S.MenuIconBlue>
              <S.MenuIcon src={'/icon2.png'} alt="시발 진짜 왜그래" />
            </S.MenuIconBlue>
            <S.MenuText>결과 조회</S.MenuText>
          </S.MainMenus>

          <S.MainMenus onClick={gotoMypage}>
            <S.MenuIconBlue>
              <S.MenuIcon src={'/icon2.png'} alt='인생 살기 힘들다' />
            </S.MenuIconBlue>
            <S.MenuText>마이페이지</S.MenuText>
          </S.MainMenus>

        </S.MainMenu>
      </S.MainBodyDiv>
    </>
  );
}

export default Main;
