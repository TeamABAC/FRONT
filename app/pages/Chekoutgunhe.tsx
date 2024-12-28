"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from "../styles/Chekoutgunhe";
function App() {


  return (
<>
    <NavBar/>
  <S.Background>
    <S.Mygunheimporm>나의 건의 목록</S.Mygunheimporm>
    <S.White>
      <S.GunheCheckText>건의 조회</S.GunheCheckText>
        <S.ImpormationText>기본 정보</S.ImpormationText>
        <S.Table>
          <thead>
            <tr>
              <S.Th>신청일</S.Th>
              <S.Th>건의 제목</S.Th>
              <S.Th>건의 유형</S.Th>
              <S.Th>담당자</S.Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <S.Td>24.08.02 21:45</S.Td>
              <S.Td>치킨치킨 읭 치킨</S.Td>
              <S.Td>기타</S.Td>
              <S.Td>김홍준</S.Td>
             </tr>
          </tbody>
        </S.Table>
        <S.GunheText>건의 상태</S.GunheText>
        <S.Icons>
          <S.Jubsu>
            <S.JubsuImage src={'BlueJupsu.png'}></S.JubsuImage>
            <S.JubsuText>접수</S.JubsuText>
          </S.Jubsu>
          <S.Serch>
            <S.SerchImage src={'BlueSerch.png'}></S.SerchImage>
            <S.SerchText>검토</S.SerchText>
          </S.Serch>
          <S.Check>
            <S.CheckImage src={'BlueCheck.png'}></S.CheckImage>
            <S.CheckText>최종결과</S.CheckText>
          </S.Check>
          <S.Run>
            <S.RunImage src={'BlueRun.png'}></S.RunImage>
            <S.RunText>건의실행</S.RunText>
          </S.Run>
        </S.Icons>
    </S.White>
  </S.Background>
  </>
  );
}

export default App;