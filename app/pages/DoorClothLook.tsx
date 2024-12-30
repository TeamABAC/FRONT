'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // useRouter를 import합니다.
import NavBar from '../components/NavBar';
import * as S from '../styles/DoorClothLook';

interface SavedNotice {
  title: string;
  body: string;
}

function Seegunhe() {
  const [noticeShow, setNoticeShow] = useState(false);
  const noticeRef = useRef<HTMLDivElement | null>(null);

  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeBody, setNoticeBody] = useState('');
  const [savedNotices, setSavedNotices] = useState<SavedNotice[]>([]);
  const [isClient, setIsClient] = useState(false); // 클라이언트 확인 상태 추가

  const router = useRouter(); // useRouter 훅을 사용하여 라우터를 가져옵니다.

  // 클라이언트 환경 확인
  useEffect(() => {
    setIsClient(true); // 클라이언트 환경에서만 실행
  }, []);

  // 로컬 스토리지에서 공지사항을 가져옴
  useEffect(() => {
    if (isClient) {
      const noticeData = JSON.parse(localStorage.getItem('notices') || '[]');
      setSavedNotices(noticeData);
    }
  }, [isClient]); // 클라이언트 상태가 변경되면 실행

  // 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (noticeRef.current && !noticeRef.current.contains(event.target as Node)) {
        setNoticeShow(false);
      }
    }

    if (noticeShow) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [noticeShow]);

  // 공지사항 제출
  function handleSubmit() {
    const noticeData: SavedNotice = {
      title: noticeTitle,
      body: noticeBody,
    };

    const updatedNotices = [noticeData, ...savedNotices];
    if (isClient) {
      localStorage.setItem('notices', JSON.stringify(updatedNotices));
    }

    setSavedNotices(updatedNotices);
    setNoticeTitle('');
    setNoticeBody('');
    setNoticeShow(false);
  }

  // 'Checkgunhe' 페이지로 이동하는 함수
  function gotoCheckgunhe() {
    router.push('/Chekoutgunhe'); // '/Checkgunhe'로 라우팅
  }

  // 클라이언트가 아니면 로딩 상태를 반환
  if (!isClient) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <NavBar />
      <S.Background src="doorclothes.png" />
      <S.White>
        <S.Option>
          <S.OptionText>급식</S.OptionText>
        </S.Option>
        <S.Contenthap>
          <S.ContentUp>
            <S.Texte>밥 먹는중에 이상한것이 나왔어요</S.Texte>
          </S.ContentUp>
          <S.Content>
            <S.Texte>12월 30일에 밥먹는 중에 벌레가 나왔어요</S.Texte>
          </S.Content>
        </S.Contenthap>
        <S.Goodbutton>
          <S.GoodImage src="Good.svg" />
          <S.GoodText>추천</S.GoodText>
        </S.Goodbutton>
        <S.Checkbutton onClick={gotoCheckgunhe}>
          <S.CheckImage src="AA.svg" />
          <S.CheckText>조회</S.CheckText>
        </S.Checkbutton>
      </S.White>
    </>
  );
}

export default Seegunhe;
