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
        <S.listTop></S.listTop>
        <S.listdiv></S.listdiv>

      </S.whiteDiv>
    </S.grayBackground>
    </>
  )
}

export default EveryData