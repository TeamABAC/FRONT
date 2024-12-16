'use client'
import React from 'react'
import * as S from '../style/Login'
import { useRouter } from "next/navigation";

function Login() {
  return (
    <div>
      <S.ImageSettion> 
      <S.Logo src="/logowhite.png" alt="로고" />
      <S.LoginWhite>
          <S.LoginWhiteText>로그인</S.LoginWhiteText>
      
      <S.EmailInput placeholder=' 이메일'></S.EmailInput>
      <S.PasswordInput placeholder=' 비밀번호'></S.PasswordInput>
      
      <S.LoginButton>
        <S.LoginButtonText>로그인</S.LoginButtonText>
      </S.LoginButton>
      
      </S.LoginWhite>
      
      <S.Background src='/background2.png' alt="배경">
      </S.Background>
      </S.ImageSettion>
    </div>
  )
}

export default Login;