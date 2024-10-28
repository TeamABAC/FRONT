'use client';

import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import * as S from '../styles/MyPageCss';

function Mypage() {
  const [selected, setSelected] = useState<"header" | number | null>(null);

  const handleHeaderClick = () => {
    setSelected((prevSelected) => (prevSelected === "header" ? null : "header"));
  };

  const handleListClick = (index: number) => {
    setSelected((prevSelected) => (prevSelected === index ? null : index));
  };

  return (
    <>
      <NavBar />

      <S.MyPageBodyDiv>
        <S.MyPageTextDiv isSelected={selected === "header"} onClick={handleHeaderClick}>
          <S.MyPageText isSelected={selected === "header"}>마이페이지</S.MyPageText>
        </S.MyPageTextDiv>


        <S.ListDiv>
          {["나의 정보", "나의 건의 목록"].map((text, index) => (
            <S.ListText
              key={index}
              isSelected={selected === index}
              onClick={() => handleListClick(index)}
            >
              {text}
            </S.ListText>
          ))}
        </S.ListDiv>
      </S.MyPageBodyDiv>
    </>
  );
}

export default Mypage;