'use client';

import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import * as S from '../styles/MyPageCss';

function Mypage() {

  const [areSelected ,isSelected ]= useState("");
  const [selected, setSelected] = useState<string>('마이페이지');

  function userSelect(item : any) {
    setSelected(item);
  }

  return (
    <>
      <NavBar />

      <S.MyPageBodyDiv>
        <S.MyPageTextDiv>
          <S.MyPageText>
            마이페이지
          </S.MyPageText>
        </S.MyPageTextDiv>

        <S.GuriGuri src="/GuriGuri.svg" alt="구리구리 이미지" />

          <S.NameDiv>
            <S.GungheText>건의: ~개</S.GungheText>
            <S.Comment>댓글:~개 </S.Comment>
          </S.NameDiv>

          <S.InformDiv>
            <S.Class>
              <S.ClassText>학번</S.ClassText>
              <S.EmailText>이메일</S.EmailText>
            </S.Class>
            <S.InputStyle/>
            <S.InputDiv>
              <S.Input placeholder='수정' ></S.Input>
              <S.InputText ></S.InputText>
              <S.InputSpan />
            </S.InputDiv>
          </S.InformDiv>

      </S.MyPageBodyDiv>
    </>
  );
}

export default Mypage;
