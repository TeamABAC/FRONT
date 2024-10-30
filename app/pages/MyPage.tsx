'use client';

import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import * as S from '../styles/MyPageCss';

function Mypage() {

  const [selected, setSelected] = useState('마이페이지');

  function userSelect(item) {
    setSelected(item);
  }

  return (
    <>
      <NavBar />

      <S.MyPageBodyDiv>
        <S.MyPageTextDiv 
         isSelected={selected === '마이페이지'}
         onClick={() => userSelect('마이페이지')}>

          <S.MyPageText isSelected={selected === '마이페이지'}>
            마이페이지
          </S.MyPageText>
        </S.MyPageTextDiv>

        <S.ListDiv>
          <S.ListText
          isSelected={selected === '나의 정보'}
          onClick={() => userSelect('나의 정보')}>
            나의 정보
          </S.ListText>

          <S.ListText
          isSelected={selected === '나의 건의 목록'}
          onClick={() => userSelect('나의 건의 목록')}>
            나의 건의 목록
          </S.ListText>
        </S.ListDiv>
      </S.MyPageBodyDiv>
    </>
  );
}

export default Mypage;
