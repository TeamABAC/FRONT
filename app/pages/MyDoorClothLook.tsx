'use client';

import React, { useState, useRef, useEffect } from 'react';
import NavBar from '../components/NavBar';
import * as S from '../styles/MyDoorClothLook';

function MyDoorClothLook() {
  const [noticeShow, setNoticeShow] = useState(false);
  const noticeRef = useRef<HTMLDivElement | null>(null);

  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeBody, setNoticeBody] = useState('');
  const [savedNotices, setSavedNotices] = useState<savedNotice[]>([]);

  interface savedNotice {
    title: string;
    body: string;
  }

  useEffect(() => {
    // 로컬 스토리지에서 공지사항을 가져옴
    const noticeData = JSON.parse(localStorage.getItem('notices') || '[]');
    setSavedNotices(noticeData);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (noticeRef.current && !noticeRef.current.contains(event.target as Node)) {
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

  function handleSubmit() {
    const noticeData: savedNotice = {
      title: noticeTitle,
      body: noticeBody,
    };

    // 새로운 공지사항을 배열의 맨 앞에 추가
    const updatedNotices = [noticeData, ...savedNotices];
    localStorage.setItem('notices', JSON.stringify(updatedNotices));

    // 상태 초기화
    setSavedNotices(updatedNotices);
    setNoticeTitle('');
    setNoticeBody('');
    setNoticeShow(false);
  }

  return (
    <>
      <NavBar />
      <S.Background src={'doorclothes.png'} />
      <S.White>
        <S.Option>
          <S.OptionText>급식</S.OptionText>
        </S.Option>

        <S.Contenthap>
          <S.ContentUp>
            
            <S.DeleteButton>
              <S.DeleteButtonText>삭제</S.DeleteButtonText>
            </S.DeleteButton>
            
            <S.FixButton>
              <S.FixButtonText>수정하기</S.FixButtonText>
            </S.FixButton>
          </S.ContentUp>
          <S.Content />
        </S.Contenthap>

        <S.Goodbutton>
          <S.GoodImage src={'Good.svg'} />
          <S.GoodText>추천</S.GoodText>
        </S.Goodbutton>
        <S.Checkbutton>
          <S.CheckImag src={'Checkimg.svg'}/>
          <S.CheckText>조회</S.CheckText>
        </S.Checkbutton>
      </S.White>
    </>
  );
}

export default MyDoorClothLook;
