'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from '../styles/EveryData';

function EveryData() {
    const router = useRouter();

  return (
    <>
    <NavBar />
    <S.grayBackground>
      <S.whiteDiv>
        <S.headText>모두의 건의 기록</S.headText>
        <S.listTop>
          <S.listTopText absoluteLeft='40px'>번호</S.listTopText>
          <S.listTopText absoluteLeft='170px'>신청일</S.listTopText>
          <S.listTopText absoluteLeft='380px'>건의 제목</S.listTopText>
          <S.listTopText absoluteLeft='600px'>건의 유형</S.listTopText>
          <S.listTopText absoluteLeft='780px'>건의 상태</S.listTopText>
        </S.listTop>

      </S.whiteDiv>
    </S.grayBackground>
    </>
  )
}

export default EveryData