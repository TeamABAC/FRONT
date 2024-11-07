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
      </S.MyPageBodyDiv>
    </>
  );
}

export default Mypage;
