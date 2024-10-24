'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from '../styles/DoorCloth1Css';
import * as R from '../styles/DoorCloth3Css';

function DoorCloth1() {
  const router = useRouter();

  return (
    <>
      <NavBar />

      <S.BackgroundColor>
        <S.WhiteDiv>
          <S.TendinousText>건의</S.TendinousText>

          <S.DivideLine />

          <R.RoundDiv>
            <R.RoundTwo>
              <R.RoundText2>세부사항</R.RoundText2>
            </R.RoundTwo>

            <R.RoundOne>
              <R.RoundText>건의 작성</R.RoundText>
            </R.RoundOne>

            <R.RoundOne>
              <R.RoundText>작성 완료</R.RoundText>
            </R.RoundOne>
          </R.RoundDiv>

          <S.DivideBlueLine>
            <S.DivideBlueText>건의자 상세 정보 및 동의</S.DivideBlueText>
          </S.DivideBlueLine>

          <S.AgreeDiv>
            <S.AgreeText>개인정보 수집 및 이용 동의</S.AgreeText>
          </S.AgreeDiv>
        </S.WhiteDiv>
      </S.BackgroundColor>
    </>
  );
}

export default DoorCloth1;
