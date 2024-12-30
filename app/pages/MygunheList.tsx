"use client"; 
import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from '../styles/MygunheList';
function MygunheList() {
    const router = useRouter();

    function handleOnclick()
    {
        router.push('/DoorClothLook');
    }
  return (
    <>
      <NavBar />  
      <S.grayBackground>
        <S.whiteDiv>
          <S.headText>나의 건의 목록</S.headText>
          <S.listTop>
            <S.listTopText absoluteLeft='40px'>신청일</S.listTopText>
            <S.listTopText absoluteLeft='170px'>건의제목</S.listTopText>
            <S.listTopText absoluteLeft='380px'>건의 유형</S.listTopText>
            <S.listTopText absoluteLeft='600px'>담당자</S.listTopText>
            <S.listTopText absoluteLeft='780px'>건의 상태</S.listTopText>
          </S.listTop>
          <S.Sample onClick={handleOnclick}>
            <S.Td absoluteLeft= '50px'>24.08.02 21:45 </S.Td>
            <S.Td absoluteLeft='210px'>의자가 고장이 났어요</S.Td>
            <S.Td absoluteLeft='430px'>시설관리</S.Td>
            <S.Td absoluteLeft='650px'>김홍준</S.Td>
            <S.Td absoluteLeft='830px'>검토중</S.Td>
          </S.Sample>
        </S.whiteDiv>
      </S.grayBackground>
    </>
  )
}

export default MygunheList