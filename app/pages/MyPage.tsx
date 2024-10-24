'use client';

import Router from 'next/router';
import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from '../styles/MyPageCss';

function Mypage() {
  const router = useRouter();

  return (
    <>
      <NavBar />

      <S.MyPageBodyDiv>

        <S.MyPageTextDiv>
          <S.MyPageTextSelect>마이페이지</S.MyPageTextSelect>
        </S.MyPageTextDiv>

        <S.ListDiv>

            <S.ListText>나의 정보</S.ListText>

            <S.ListText>나의 건의 목록</S.ListText>

        </S.ListDiv>
      </S.MyPageBodyDiv>
    </>
  );
}
export default Mypage;
