'use client';

import React from 'react';
import * as S from '../styles/singin-in2';
import { useRouter } from 'next/navigation';
import { useUser } from '../context/UserContext';
import axios from 'axios';

function Signin2() {
  const router = useRouter();
  const { userData, setUserData } = useUser();

  const handleSubmit = async () => {
    if (!userData.email || !userData.password) {
      alert('모든 필드를 입력해주세요!');
      return;
    }

    try {
      const response = await axios.post(
        'https://322f-2001-e60-a017-870d-7967-ae08-f4c-c7de.ngrok-free.app/api/auth/signup',
        userData // formData 대신 userData 사용
      );
      console.log('회원가입 성공:', response.data);
      router.push('/Main');
    } catch (error: any) {
      console.error('회원가입 실패:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <S.allDiv>
        <S.Logo src="/logowhite.png" alt="로고" />
        <S.Background src="/background2.png" alt="배경" />

        <S.sigininWhite>
          <S.siginWhiteText>회원가입</S.siginWhiteText>

          <S.EmailInput
            type="email"
            placeholder="이메일"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <S.passwordInput
            type="password"
            placeholder="비밀번호"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <S.nextButton onClick={handleSubmit}>
            <S.nextButtonText>확인</S.nextButtonText>
          </S.nextButton>
        </S.sigininWhite>
      </S.allDiv>
    </>
  );
}

export default Signin2;
