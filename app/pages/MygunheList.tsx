"use client"; 
import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from '../styles/MygunheList';
function MygunheList() {
    const router = useRouter();

  return (
    <>
      <NavBar />  
      <S.grayBackground>
        <S.whiteDiv>
          <S.headText>나의 건의 목록</S.headText>
          <S.listHeaderDiv>sdfss</S.listHeaderDiv>
        </S.whiteDiv>
      </S.grayBackground>
    </>
  )
}

export default MygunheList