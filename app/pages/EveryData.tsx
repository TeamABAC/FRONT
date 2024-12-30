import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from '../styles/EveryData';

function EveryData() {
    const router = useRouter();

    function MygunhelistOnclick()
    {
    router.push('MyDoorClothLook');
    
    }
    function DoorClothLookOnclick()
    {
      router.push('DoorClothLook');
    }



  return (

    <>
    <NavBar />
    <S.grayBackground>
      <S.whiteDiv>
        <S.headText>모두의 건의 기록</S.headText>
        <S.listTop>
          <S.listTopText absoluteLeft='40px'>번호</S.listTopText>
          <S.listTopText absoluteLeft='170px'>신청일</S.listTopText>
          <S.listTopText absoluteLeft='g380px'>건의 제목</S.listTopText>
          <S.listTopText absoluteLeft='600px'>건의 유형</S.listTopText>
          <S.listTopText absoluteLeft='780px'>건의 상태</S.listTopText>
        </S.listTop>
        <S.DDiv></S.DDiv>
        <S.Sample onClick={MygunhelistOnclick}>
              <S.Td absoluteLeft='45px '>1</S.Td>
              <S.Td absoluteLeft='160px'>24.08.02 21:45</S.Td>
              <S.Td absoluteLeft='360px'>의자가 고장이 났어요</S.Td>
              <S.Td absoluteLeft='620px'>시설관리</S.Td>
              <S.Td absoluteLeft='790px'>검토중</S.Td>

        </S.Sample>
        <S.Sample2 onClick={DoorClothLookOnclick}>
              <S.Td absoluteLeft='45px '>2</S.Td>
              <S.Td absoluteLeft='160px'>24.10.20 11:40 </S.Td>
              <S.Td absoluteLeft='360px'>급식에 이상한게 나왔어요</S.Td>
              <S.Td absoluteLeft='620px'>급식</S.Td>
              <S.Td absoluteLeft='790px'>접수완료</S.Td>
        </S.Sample2>
        
      </S.whiteDiv>
    </S.grayBackground>
    </>
  )
}

export default EveryData