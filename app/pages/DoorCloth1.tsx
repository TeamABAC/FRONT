'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import RadioCheck from '../components/RadioCheck';
import * as S from '../styles/DoorCloth1Css';
import goToDoor2Page from '../DoorCloth2/page';

function DoorCloth1() {
  const router = useRouter();

  function goToDoor2Page() {
    router.push('/DoorCloth2');
  }

  return (
    <>
      <NavBar />

      <S.BackgroundColor>
        <S.WhiteDiv>
          <S.TendinousText>건의</S.TendinousText>

          <S.DivideLine top="100px" />

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
            <S.AgreeContentText>
              이름, 학번, 이메일, 연락처 등을 건의 작성자 구분과 진정성 등을 높이기 위해 수집합니다~~
            </S.AgreeContentText>
          </S.AgreeContentDiv>

          <S.AgreeCheckDiv Agreetop="620px" Agreeleft='360px'>
            <RadioCheck radioLabelText='동의' disradioLabelText='비동의'/>
          </S.AgreeCheckDiv>


         <S.DivideLine top="700px" />

         <S.TextSpan>건의 공개 여부</S.TextSpan>

         <S.AgreeCheckDiv Agreetop="720px" Agreeleft='140px'>
          <RadioCheck radioLabelText='공개' disradioLabelText='비공개'/>
         </S.AgreeCheckDiv>

         <S.Checkbutton onClick={goToDoor2Page}>
          <S.CheckText onClick={goToDoor2Page}>확인</S.CheckText>
         </S.Checkbutton>
        </S.WhiteDiv>
      </S.BackgroundColor>
    </>
  );
}

export default DoorCloth1;
