'use client'
import React, { ChangeEvent, useState } from 'react'
import * as S from '../styles/Login'
import { useRouter } from "next/navigation";

function Login() {

  return (
    <>
      <S.Background  src='/background2.png' alt="배경" />      
      <S.Logo src="/logowhite.png" alt="로고" />

      <S.LoginWhite>         
          <S.LoginWhiteText>로그인</S.LoginWhiteText>
          <S.EmailInput type='email' placeholder=' 이메일' required/>
          <S.PasswordInput type='password' placeholder=' 비밀번호' required/>

           <S.LoginButton>
              <S.LoginButtonText>로그인</S.LoginButtonText>
          </S.LoginButton>
      </S.LoginWhite>  
    </>
  )
}

export default Login;