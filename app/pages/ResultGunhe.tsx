"use client";


import React, { useState, useRef, useEffect } from 'react';
import NavBar from "../components/NavBar";
import * as S from "../styles/ResultGunhe";
import GlobalStyle from "../components/GlobalStyle";



function GunheResult() {

  const [noticeShow, setNoticeShow] = useState(false);
  const noticeRef = useRef<HTMLDivElement | null>(null);

  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeBody, setNoticeBody] = useState('');
  const [savedNotices, setSavedNotices] = useState<savedNotice[]>([]);

  interface savedNotice {
    title: string;
    body: string;
  }

  useEffect(() => {
    // 로컬 스토리지에서 공지사항을 가져옴
    const noticeData = JSON.parse(localStorage.getItem('notices') || '[]');
    setSavedNotices(noticeData);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (noticeRef.current && !noticeRef.current.contains(event.target as Node)) {
        setNoticeShow(false); // 공지사항 외부 클릭 시 닫힘
      }
    }
    if (noticeShow) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [noticeShow]);

  function handleSubmit() {
    const noticeData: savedNotice = {
      title: noticeTitle,
      body: noticeBody,
    };

    // 새로운 공지사항을 배열의 맨 앞에 추가
    const updatedNotices = [noticeData, ...savedNotices];
    localStorage.setItem('notices', JSON.stringify(updatedNotices));

    // 상태 초기화
    setSavedNotices(updatedNotices);
    setNoticeTitle('');
    setNoticeBody('');
    setNoticeShow(false);
  }

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
                <S.Td>치킨치킨 읭 치킨</S.Td>
                <S.Td>기타</S.Td>
                <S.Td>김홍준</S.Td>
              </tr>
            </tbody>
          </S.Table>
          <S.GunheText>건의 상태</S.GunheText>
          <S.Icons>
            <S.Jubsu>
              <S.JubsuImage src={"BlueJupsu.png"} />
              <S.JubsuText>접수</S.JubsuText>
            </S.Jubsu>
            <S.Nemo />
            <S.Serch>
              <S.SerchImage src={"BlueSerch.png"} />
              <S.SerchText>검토</S.SerchText>
            </S.Serch>
            <S.Nemo />
            <S.Check>
              <S.CheckImage src={"BlueCheck.png"} />
              <S.CheckText>최종결과</S.CheckText>
            </S.Check>
            <S.Nemo />
            <S.Run>
              <S.RunImage src={"BlueRun.png"} />
              <S.RunText>건의실행</S.RunText>
            </S.Run>
          </S.Icons>
          <S.Result>
            <S.ResultText>건의 결과 검토: 의견 부분적 수용</S.ResultText>
            <S.ResultsebuText>
              저희 팀의 검토 및 사감 선생님과 회의에 따라 서경주님의 건의는 실현 가능성이 낮다고
              판결이 내렸습니다.
            </S.ResultsebuText>
          </S.Result>
        </S.White>
      </S.Background>
    </>
  );
}

export default GunheResult;