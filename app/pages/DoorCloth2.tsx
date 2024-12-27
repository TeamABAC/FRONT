'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import ImageUp from '../components/ImageUp';
import RadioCheck from '../components/RadioCheck';
import * as S from '../styles/DoorCloth2Css';

function DoorCloth2() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // 선택된 건의 유형 상태 관리
  const [savedDoorCloth, setsavedDoorcloth] = useState<savedDoorCloth[]>([]);

  interface savedDoorCloth {
    title: string;
    body: string;
    img: File;
  }

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 공지사항을 가져옴
    const doorClothData = JSON.parse(localStorage.getItem('doorcloth') || '[]');
    setsavedDoorcloth(doorClothData);  }, []);
  function handleOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedOption(e.target.value); // 선택된 옵션 상태 업데이트
  }

  function goToDoor3Page() {
    if (selectedOption) {
      router.push('/DoorCloth3'); // 선택된 옵션이 있을 때만 페이지 전환
    } else {
      alert('건의 유형을 선택해 주세요.'); // 선택되지 않았을 경우 경고
    }
  }

  return (
    <>
      <NavBar />
      
      <S.BackgroundColor>
        <S.WhiteDiv>
          <S.TendinousText>건의</S.TendinousText>
          <S.DivideLine top='100px'/>

          <S.RoundDiv>
            <S.RoundOne>
              <S.RoundText>세부사항</S.RoundText>
            </S.RoundOne>

            <S.RoundTwo>
              <S.RoundText2>건의 작성</S.RoundText2>
            </S.RoundTwo>

            <S.RoundOne>
              <S.RoundText>작성 완료</S.RoundText>
            </S.RoundOne>
          </S.RoundDiv>

          <S.DivideBlueLine>
            <S.DivideBlueText>건의 작성</S.DivideBlueText>
          </S.DivideBlueLine>

          <S.CheckBoxDiv>
            <S.CheckDivideText>건의 구분</S.CheckDivideText>
            <S.RadioCheckDiv>
              <RadioCheck radioLabelText='학교폭력 건의' disradioLabelText='급식 건의' name='checklist' onChange={handleOptionChange} value='학교폭력 건의'/>
              <RadioCheck radioLabelText='시설관련 건의' disradioLabelText='기타 건의' name='checklist'onChange={handleOptionChange} value='시설관련 건의'/>
            </S.RadioCheckDiv>
            <S.GrayText>※신청하실 건의의 유형을 선택해주십시오.</S.GrayText>
          </S.CheckBoxDiv>

          <S.DivideLine top='730px'/>

          <S.InputText $top='800px'>건의 제목</S.InputText>
          <S.TitleInput />

          <S.InputText $top='960px'>건의 사항</S.InputText>
          <S.ContentInput />

          <S.InputText $top='1450px'>첨부 파일</S.InputText>

          <ImageUp />

          <S.Checkbutton onClick={goToDoor3Page}>
            <S.CheckText>제출</S.CheckText>
          </S.Checkbutton>
        </S.WhiteDiv>
      </S.BackgroundColor>
    </>
  );
}

export default DoorCloth2;