'use client'
import React from 'react'
import * as S from '../style/singin-in2'
import { useRouter } from "next/navigation";

function sigin() {
  return (
    <div>
      <S.ImageSettion> 
      <S.Logo src="/logowhite.png" alt="로고" />
      <S.LoginWhite>
          <S.LoginWhiteText>회원가입</S.LoginWhiteText>
      <S.EmailInput placeholder=' 이름'></S.EmailInput>
      <S.EmailInputText>이메일</S.EmailInputText>
      <S.PasswordInput placeholder=' 학번'></S.PasswordInput>
      <S.PasswordInputText>비밀번호</S.PasswordInputText>
      
      <S.LoginButton>
        <S.LoginButtonText>확인</S.LoginButtonText>
      </S.LoginButton>
      
      </S.LoginWhite>
      
      <S.Background src='/background2.png' alt="배경">
      </S.Background>
      </S.ImageSettion>
    </div>
  )
}

export default sigin;