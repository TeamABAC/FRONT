'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import RadioCheck from '../components/RadioCheck';
import * as S from '../styles/DoorCloth1Css';

function DoorCloth1() {
  const router = useRouter();
  const [isAgreed, setIsAgreed] = useState(false); // 동의 여부 상태 관리

  function handleAgreementChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsAgreed(e.target.value === '동의'); // '동의'가 선택되면 true
  }

  function goToDoor2Page() {
    if (isAgreed) {
      router.push('/DoorCloth2');
    } else {
      alert('동의해야 다음 페이지로 넘어갈 수 있습니다.'); // 동의하지 않았을 경우 경고
    }
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
            <RadioCheck 
              radioLabelText='동의' 
              disradioLabelText='비동의' 
              name="agreement"
              onChange={handleAgreementChange} // 체크박스 상태 변경 핸들러
            />
          </S.AgreeCheckDiv>

          <S.DivideLine top="700px" />

          <S.TextSpan>건의 공개 여부</S.TextSpan>

          <S.AgreeCheckDiv Agreetop="720px" Agreeleft='140px'>
            <RadioCheck 
              radioLabelText='공개' 
              disradioLabelText='비공개' 
              name='visibility'
              onChange={() => {}} // 필요한 경우에 맞게 수정
            />
          </S.AgreeCheckDiv>

          <S.Checkbutton onClick={goToDoor2Page}>
            <S.CheckText>확인</S.CheckText>
          </S.Checkbutton>
        </S.WhiteDiv>
      </S.BackgroundColor>
    </>
  );
}

export default DoorCloth1;
