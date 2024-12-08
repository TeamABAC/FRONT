'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import RadioCheck from '../components/RadioCheck';
import * as S from '../styles/DoorCloth1Css';

function DoorCloth1() {
  const router = useRouter();
  const [data, setData] = useState<{ key: string; value: any }[]>([]);

  // 공개 여부 상태 업데이트
  function handlePublic(e: React.ChangeEvent<HTMLInputElement>) {
    const isPublic = e.target.value === '공개';
    const updatedData = [
      ...data.filter(item => item.key !== 'isPublic'),
      { key: 'isPublic', value: isPublic }
    ];
    setData(updatedData);
    localStorage.setItem('doorClothData', JSON.stringify(updatedData));
  }

  // 다음 페이지로 이동
  function goToDoor2Page() {
    if (data.some(item => item.key === 'isPublic')) {
      router.push('/DoorCloth2');
    } else {
      alert('공개 여부를 선택해 주세요.');
    }
  }

  return (
    <>
      <NavBar /> {/* 네비게이션 바 컴포넌트 */}
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

          <S.PrivateText>개인정보 수집 및 이용 동의</S.PrivateText>
          <S.PrivateContainer></S.PrivateContainer>

          <S.TextSpan>건의 공개 여부</S.TextSpan>
          <S.AgreeCheckDiv $Agreetop="710px" $Agreeleft="700px">
            <RadioCheck
              radioLabelText="공개"
              disradioLabelText="비공개"
              name="visibility"
              onChange={handlePublic}
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
