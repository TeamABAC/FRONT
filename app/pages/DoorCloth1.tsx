'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from '../styles/DoorCloth1Css';

function DoorCloth1() {
  const router = useRouter();

  return (
    <>
      <NavBar />

      <S.BackgroundColor>
        <S.WhiteDiv>
          <S.TendinousText>건의</S.TendinousText>

          <S.DivideLine />

          <S.RoundDiv>
            <S.RoundTwo>
              <S.RoundText2>세부사항</S.RoundText2>
            </S.RoundTwo>

            <S.RoundOne>
              <S.RoundText>건의 작성</S.RoundText>
            </S.RoundOne>

            <S.RoundOne>
              <S.RoundText>작성 완료</S.RoundText>
            </S.RoundOne>
          </S.RoundDiv>

          <S.DivideBlueLine>
            <S.DivideBlueText>건의자 상세 정보 및 동의</S.DivideBlueText>
          </S.DivideBlueLine>

          <S.AgreeDiv>
            <S.AgreeText>개인정보 수집 및 이용 동의</S.AgreeText>
          </S.AgreeDiv>

          <S.AgreeContentDiv>
            <S.AgreeContentText>이름, 학번, 이메일, 연락처 등을 건의 작성자 구분과 진정성 등등을 높이기 위해 수집합니다~~</S.AgreeContentText>
          </S.AgreeContentDiv>

          <S.AgreeCheckDiv>
            <S.AgreeCheckRadious>
              동의
            </S.AgreeCheckRadious>
          </S.AgreeCheckDiv>

        </S.WhiteDiv>
      </S.BackgroundColor>
    </>
  );
}

export default DoorCloth1;
