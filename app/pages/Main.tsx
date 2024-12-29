'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from '../styles/MainCss';

function Main() {

  const router = useRouter();
  const [noticeShow, setNoticeShow] = useState(false);
  const noticeRef = useRef(null);

  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeBody, setNoticeBody] = useState('');
  const [savedNotices, setSavedNotices] = useState<savedNotice[]>([]);

  interface savedNotice {
    title: string;
    body: string;
  }

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 공지사항을 가져옴
    const noticeData = JSON.parse(localStorage.getItem('notices')) || [];
    setSavedNotices(noticeData);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (noticeRef.current && !noticeRef.current.contains(event.target)) {
        setNoticeShow(false); // 공지사항 외부 클릭 시 닫힘
      }
    }
    if (noticeShow) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [noticeShow]);
  
// 공지 작성 제출 함수
function handleSubmit() {
  const noticeData: savedNotice = {
      title: noticeTitle,
      body: noticeBody,
  };

  // 새로운 공지사항을 배열의 맨 앞에 추가
  const updatedNotices = [noticeData, ...savedNotices];
  localStorage.setItem('notices', JSON.stringify(updatedNotices));

  // 상태 초기화
  setSavedNotices(updatedNotices); // 저장된 공지사항 상태 업데이트
  setNoticeTitle('');
  setNoticeBody('');
  setNoticeShow(false);
}


  function gotoDoor1() {
    if (!noticeShow) router.push('/DoorCloth1');
  }

  function gotoMypage() {
    if (!noticeShow) router.push('/MyPage');
  }

  function goToEveryData() {
    if (!noticeShow) router.push('/EveryData');
  }
  
  
  function goToResultGunhe(){
    if (!noticeShow) router.push('/ResultGunhe');
    
  }
  function toggleNotice() {
    setNoticeShow(!noticeShow);
  }

  return (
    <>
      <NavBar />

      <S.MainBodyDiv>
        {noticeShow && <S.Backdrop />}

        <S.BackgroundImage src={'/Mainbackground.png'} alt="메인" />
        <S.NoticeTmfDiv>
          <S.noticeHeaderRow>
            <S.NoticeText>공지사항</S.NoticeText>
            <S.plusNoticebutton onClick={toggleNotice}>
              <S.plusEmote src={'/plusImg.png'} alt="plus" />
            </S.plusNoticebutton>
          </S.noticeHeaderRow>

          {noticeShow && (
            <S.NoticeDiv ref={noticeRef}>
              <S.NoticeMaketext>공지 작성</S.NoticeMaketext>
              <S.NoticeCloseX src={'CloseX.png'} alt='하 준혁아...' onClick={() => setNoticeShow(false)} />
              
              <S.noticeTypeContainer>
                <S.TitleRow>
                  <S.noticeInpuText>제목</S.noticeInpuText>
                  <S.noticeTitleInput value={noticeTitle} onChange={(e) => setNoticeTitle(e.target.value)} />
                </S.TitleRow>

                <S.bodyRow>
                  <S.noticeInpuText>내용</S.noticeInpuText>
                  <S.noticeBodyInput value={noticeBody} onChange={(e) => setNoticeBody(e.target.value)} />  
                </S.bodyRow>

                <S.SubmitButton onClick={handleSubmit}>
                  <S.SubmitText>확인</S.SubmitText>
                </S.SubmitButton>
              </S.noticeTypeContainer>
            </S.NoticeDiv>
          )}
          
          {savedNotices.map((notice, index) => (
              <S.SavedNoticeDiv key={index}>
              <S.SavedNoticeTitle>{notice.title}</S.SavedNoticeTitle>
                <S.SavedNoticeBody>{notice.body}</S.SavedNoticeBody>
              </S.SavedNoticeDiv>
          ))}
        </S.NoticeTmfDiv>

        <S.MainBodyBlueStick />

        {/* 메뉴 */}
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

          <S.MainMenus onClick={goToResultGunhe}>
            <S.MenuIconBlue>
              <S.MenuIcon src={'/icon2.png'} alt="아이콘2" />
            </S.MenuIconBlue>
            <S.MenuText>결과 조회</S.MenuText>
          </S.MainMenus>

          <S.MainMenus onClick={gotoMypage}>
            <S.MenuIconBlue>
              <S.MenuIcon src={'/Mypageicon.svg'} alt="아이콘2" />
            </S.MenuIconBlue>
            <S.MenuText>마이페이지</S.MenuText>
          </S.MainMenus>
        </S.MainMenu>
      </S.MainBodyDiv>
    </>
  );
}

export default Main;
