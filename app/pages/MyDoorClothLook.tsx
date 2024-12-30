'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import * as S from '../styles/MyDoorClothLook';

interface SavedNotice {
  title: string;
  body: string;
}

function MyDoorClothLook() {
  const [noticeShow, setNoticeShow] = useState(false);
  const noticeRef = useRef<HTMLDivElement | null>(null);

  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeBody, setNoticeBody] = useState('');
  const [savedNotices, setSavedNotices] = useState<SavedNotice[]>([]);
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // 클라이언트 환경 확인
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const noticeData = JSON.parse(localStorage.getItem('notices') || '[]');
      setSavedNotices(noticeData);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (noticeRef.current && !noticeRef.current.contains(event.target as Node)) {
        setNoticeShow(false);
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
    const noticeData: SavedNotice = { title: noticeTitle, body: noticeBody };

    const updatedNotices = [noticeData, ...savedNotices];
    localStorage.setItem('notices', JSON.stringify(updatedNotices));

    setSavedNotices(updatedNotices);
    setNoticeTitle('');
    setNoticeBody('');
    setNoticeShow(false);
  }

  function handleDelete(index: number) {
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
    if (confirmDelete) {
      const updatedNotices = savedNotices.filter((_, i) => i !== index);
      localStorage.setItem('notices', JSON.stringify(updatedNotices));
      setSavedNotices(updatedNotices);
      alert('삭제하였습니다.');
    }
  }

  function gotoResult() {
    router.push('/Checkoutgunhe');
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
          {savedNotices.map((notice, index) => (
            <S.ContentUp key={index}>
              <S.DeleteButton onClick={() => handleDelete(index)}>
                <S.DeleteButtonText>삭제</S.DeleteButtonText>
              </S.DeleteButton>
              <S.FixButton>
                <S.FixButtonText>수정하기</S.FixButtonText>
              </S.FixButton>
              <S.Content>
                {notice.title}: {notice.body}
              </S.Content>
            </S.ContentUp>
          ))}
        </S.Contenthap>

        <S.Goodbutton>
          <S.GoodImage src="Good.svg" />
          <S.GoodText>추천</S.GoodText>
        </S.Goodbutton>
        <S.Checkbutton onClick={gotoResult}>
          <S.CheckImag src="Checkimg.svg" />
          <S.CheckText>조회</S.CheckText>
        </S.Checkbutton>
      </S.White>
    </>
  );
}

export default MyDoorClothLook;
