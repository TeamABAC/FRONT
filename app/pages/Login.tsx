'use client';

import React, { useState, useEffect } from 'react';
import * as S from '../styles/Login';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function Login() {
  const router = useRouter();
  
  // 상태 관리
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 체크

  useEffect(() => {
    // 페이지가 로드될 때 localStorage에서 토큰을 확인
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true); // 이미 로그인된 상태라면, 로그인 상태 업데이트
      router.push('/Main'); // 이미 로그인되어 있으면 Main 페이지로 이동
    }
  }, [router]);

  const handleLogin = async () => {
    if (!email || !password) {
      alert('이메일과 비밀번호를 입력해주세요!');
      return;
    }

    try {
      // 로그인 요청
      const response = await axios.post(
        'http://192.168.196.24:5000/api/auth/login', // 로그인 엔드포인트
        { email, password }
      );

      console.log('로그인 성공:', response.data);
      localStorage.setItem('authToken', response.data.token); // 토큰 저장

      setIsLoggedIn(true); // 로그인 상태 업데이트
      router.push('/Main'); // 성공 시 Main 페이지로 이동
    } catch (error: any) {
      console.error('로그인 실패:', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  function gotoSignIn() {
    router.push('/Main');
  }

  return (
    <S.ImageSettion>
      <S.Logo src="/logowhite.png" alt="로고" />

      <S.LoginWhite>
        <S.LoginWhiteText>로그인</S.LoginWhiteText>

        <S.EmailInput
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // 이메일 상태 업데이트
        />
        <S.PasswordInput
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 비밀번호 상태 업데이트
        />

        <S.LoginButton onClick={handleLogin}>
          <S.LoginButtonText>로그인</S.LoginButtonText>
        </S.LoginButton>

        <S.LoginText>계정이 없다면?</S.LoginText>
        <S.LogininText onClick={gotoSignIn}>회원가입</S.LogininText>
      </S.LoginWhite>

      <S.Background src="/background2.png" alt="배경" />
    </S.ImageSettion>
  );
}

export default Login;
