'use client'

import React, { useState, useEffect, useRef } from 'react';
import * as S from '../styles/signin-in';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function Signin() {
  const router = useRouter(); 
  const [noticeShow, setNoticeShow] = useState(false);
  const noticeRef = useRef<HTMLDivElement | null>(null);
  
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeBody, setNoticeBody] = useState('');
  const [savedNotices, setSavedNotices] = useState<savedNotice[]>([]);
  
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', {
        userName,
        password,
        email,
      });

      if (response.status === 201) {
        console.log('Registration successful');
        router.push('/Sigin2');
      }
    } catch (error) {
      if (error.response) {
        console.log(`Error: ${error.response.data.message}`);
      } else {
        console.error('Error:', error);
      }
    }
  };



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

  return (
    <>
      <S.Logo src="/logowhite.png" alt="로고" />
      <S.Background src="/background2.png" alt="배경" />

      <S.LoginWhite>
        <S.LoginWhiteText>회원가입</S.LoginWhiteText>
        <form onSubmit={handleSubmit}>
          <S.EmailInputText>이메일</S.EmailInputText>
          <S.EmailInput 
            type="email" 
            placeholder="이메일" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <S.PasswordInputText>학번</S.PasswordInputText>
          <S.PasswordInput 
            type="password" 
            placeholder="학번" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <S.LoginButton>
            <S.LoginButtonText>다음</S.LoginButtonText>
          </S.LoginButton>
        </form>
      </S.LoginWhite>
    </>
  );
}

export default Signin;
