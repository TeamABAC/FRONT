'use client';

import React from 'react';
import * as S from '../styles/signin-in';
import { useRouter } from 'next/navigation';
import { useUser } from '../context/UserContext';

function Signin() {
  const router = useRouter();
  const { userData, setUserData } = useUser();

  const handleNext = () => {
    if (!userData.username || !userData.studentId) {
      alert('모든 필드를 입력해주세요!');
      return;
    }
    router.push('/Sigin2');
  };

  return (
    <>
      <S.allDiv>
        <S.Logo src="/logowhite.png" alt="로고" />
        <S.Background src="/background2.png" alt="배경" />

        <S.sigininWhite>
          <S.siginWhiteText>회원가입</S.siginWhiteText>

          <S.nameInput type="text" placeholder="이름" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })}/>
          <S.classNumberInput type="text" placeholder="학번" value={userData.studentId} onChange={(e) => setUserData({ ...userData, studentId: e.target.value })}/>

          <S.nextButton onClick={handleNext}>
            <S.nextButtonText>다음</S.nextButtonText>
          </S.nextButton>
        </S.sigininWhite>
      </S.allDiv>
    </>
  );
}

export default Signin;
