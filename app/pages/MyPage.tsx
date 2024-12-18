'use client';

import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import * as S from '../styles/MyPageCss';

function Mypage() {

  return (
    <>
      <NavBar />
      <S.MyPageAllBodyDiv> 

        <S.MyPageTextDiv>
          <S.MyPageText>마이페이지</S.MyPageText>
        </S.MyPageTextDiv>

        <S.nameContainer>
        </S.nameContainer>
        <br></br>
        <S.classMailContainer></S.classMailContainer>

      </S.MyPageAllBodyDiv>
    </>
  );
}

export default Mypage;
