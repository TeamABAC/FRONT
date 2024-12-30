'use client';

import React from 'react';
import * as S from '../styles/Login';
import { useRouter } from 'next/navigation';

function Login() {
  const router = useRouter();
  function gotoSignIn() {
    router.push('/Sigin-in');
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
