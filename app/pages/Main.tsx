'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from '../styles/MainCss';

function Main() {
  const router = useRouter();
  const [noticeShow, setnoticeShow] = useState(false);

  function gotoDoor1() {
    router.push('/DoorCloth1');
  }

  function gotoMypage() {
    router.push('/MyPage');
  }

  function goToEveryData() {
    router.push('/EveryData');
  }

  function showNotice() {
    setnoticeShow(true);
    console.log('babo');
  }
  return (
    <>
      <NavBar />

      <S.MainBodyDiv>
        <S.BackgroundImage src={'/Mainbackground.png'} alt="메인" />
        
        {/* 공지사항 작성 */}
        <S.NoticeTmfDiv>
          <S.NoticeText>공지사항</S.NoticeText>
          <S.plusNoticebutton onClick={showNotice}>
            <S.plusEmote src={'/plusImg.png'} alt="plus" />
          </S.plusNoticebutton>
          {setnoticeShow && (
            <S.NoticeDiv>
              
            </S.NoticeDiv>
          )}

        </S.NoticeTmfDiv>

        <S.MainBodyBlueStick />

        <S.MainMenu>
          <S.MainMenus onClick={gotoDoor1}>
            <S.MenuIconBlue>
              <S.MenuIcon src={'/icon1.png'} alt="아이콘1" />
            </S.MenuIconBlue>
            <S.MenuText>건의 작성</S.MenuText>
          </S.MainMenus>

          <S.MainMenus onClick={goToEveryData}>
            <S.MenuIconBlue>
              <S.MenuIcon src={'/icon3.png'} alt="아이콘3" />
            </S.MenuIconBlue>
            <S.MenuText>건의 게시판</S.MenuText>
          </S.MainMenus>

          <S.MainMenus>
            <S.MenuIconBlue>
              <S.MenuIcon src={'/icon2.png'} alt="아이콘2" />
            </S.MenuIconBlue>
            <S.MenuText>결과 조회</S.MenuText>
          </S.MainMenus>

          <S.MainMenus onClick={gotoMypage}>
            <S.MenuIconBlue>
              <S.MenuIcon src={'/icon2.png'} alt='아이콘2' />
            </S.MenuIconBlue>
            <S.MenuText>마이페이지</S.MenuText>
          </S.MainMenus>
        </S.MainMenu>
      </S.MainBodyDiv>
    </>
  );
}

export default Main;
