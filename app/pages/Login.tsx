'use client';

import React, { useState, useRef, useEffect } from 'react';
import * as S from '../styles/Login';
import { useRouter } from 'next/navigation';

function Login() {
  const router = useRouter();

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
    const noticeData: savedNotice = {
      title: noticeTitle,
      body: noticeBody,
    };

    const updatedNotices = [noticeData, ...savedNotices];
    localStorage.setItem('notices', JSON.stringify(updatedNotices));

    setSavedNotices(updatedNotices);
    setNoticeTitle('');
    setNoticeBody('');
    setNoticeShow(false);
  }

  function gotoSignIn() {
    router.push('/sign-in');
  }

  return (
    <>
      <S.ImageSettion>
        <S.Logo src="/logowhite.png" alt="로고" />

        <S.LoginWhite>
          <S.LoginWhiteText>로그인</S.LoginWhiteText>

          <S.EmailInput placeholder="이메일" />
          <S.PasswordInput placeholder="비밀번호" />

          <S.LoginButton>
            <S.LoginButtonText>로그인</S.LoginButtonText>
          </S.LoginButton>

          <S.LoginText>계정이 없다면?</S.LoginText>
          <S.LogininText onClick={gotoSignIn}>회원가입</S.LogininText>
        </S.LoginWhite>

        <S.Background src="/background2.png" alt="배경" />
      </S.ImageSettion>
    </>
  );
}

export default Login;
