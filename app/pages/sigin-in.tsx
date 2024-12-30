'use client'

import React from 'react';
import * as S from '../styles/signin-in';
import { useRouter } from 'next/navigation';

function Signin() {
  const router = useRouter(); 

  function goMain() {
    router.push('/Main');
  }

  return (
    <>
      <S.allDiv>
        <S.Logo src="/logowhite.png" alt="로고" />
        <S.Background src="/background2.png" alt="배경" />

        <S.sigininWhite>
          <S.siginWhiteText>회원가입</S.siginWhiteText>

          <S.EmailInputText>이메일</S.EmailInputText>
          <S.EmailInput type="email" placeholder="이메일"/>
          <S.classNumberInputText>학번</S.classNumberInputText>
          <S.classNumberInput  placeholder="학번" />

          <S.nextButton onClick={goMain}>
            <S.nextButtonText>다음</S.nextButtonText>
          </S.nextButton>
        </S.sigininWhite>
      </S.allDiv>
    </>
  );
}

export default Signin;
