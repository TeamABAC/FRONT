'use client'
import React, {useState} from 'react'
import * as S from '../styles/signin-in'
import { useRouter } from "next/navigation";

function sigin() {

const router=useRouter();
  return (
    <>
      <S.ImageSettion> 
      <S.Logo src="/logowhite.png" alt="로고" />
      <S.LoginWhite>
          <S.LoginWhiteText>회원가입2</S.LoginWhiteText>
      <S.EmailInput type="email" placeholder=' 이름'></S.EmailInput>
      <S.EmailInputText>이름</S.EmailInputText>
      <S.PasswordInput type='password' placeholder='학번'></S.PasswordInput>
      <S.PasswordInputText>학번</S.PasswordInputText>
      
      <S.LoginButton>
        <S.LoginButtonText>다음</S.LoginButtonText>
      </S.LoginButton>
      
      </S.LoginWhite>
      
      <S.Background src='/background2.png' alt="배경">
      </S.Background>
      </S.ImageSettion>
    </>
  )
}

export default sigin;


