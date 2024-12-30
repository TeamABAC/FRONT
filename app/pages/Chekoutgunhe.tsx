"use client";
import React from 'react';
import NavBar from '../components/NavBar';
import * as S from "../styles/Chekoutgunhe";
import GlobalStyle from '../components/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
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
                <S.Td>의자가 고장이 났어요</S.Td>
                <S.Td>시설관리</S.Td>
                <S.Td>김홍준</S.Td>
              </tr>
            </tbody>
          </S.Table>
          <S.GunheText>건의 상태</S.GunheText>
          <S.Icons>
            <S.Jubsu>
              <S.JubsuImage src={'BlueJupsu.png'} />
              <S.JubsuText>접수</S.JubsuText>
            </S.Jubsu>
            <S.Nemo />
            <S.Serch>
              <S.SerchImage src={'BlueSerch.png'} />
              <S.SerchText>검토</S.SerchText>
            </S.Serch>
            <S.Nemo />
            <S.Check>
              <S.CheckImage src={'BlueCheck.png'} />
              <S.CheckText>최종결과</S.CheckText>
            </S.Check>
            <S.Nemo />
            <S.Run>
              <S.RunImage src={'BlueRun.png'} />
              <S.RunText>건의실행</S.RunText>
            </S.Run>
          </S.Icons>
          <S.Result>
            <S.ResultText>건의 결과 검토: 의견 부분적 수용</S.ResultText>
            <S.ResultsebuText>
              저희 팀의 검토 및 사감 선생님과 회의에 따라 박서현님의 건의는 실현 가능성이 낮다고 판결이 내렸습니다.
            </S.ResultsebuText>
          </S.Result>
        </S.White>
      </S.Background>
    </>
  );
}

export default App;
