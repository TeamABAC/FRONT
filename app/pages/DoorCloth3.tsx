'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import NavBar from '../components/NavBar';
import * as S from '../styles/DoorCloth3Css';
function Endgunhe() {
  const router = useRouter();

  return (
    <>
      <NavBar></NavBar>

      <S.BackgroundColor>
        <S.WhiteBackground>
          <S.NotificationText>건의</S.NotificationText>

          <S.DivideLine />

          <S.RoundDiv>
            <S.RoundOne>
              <S.RoundText>세부사항</S.RoundText>
            </S.RoundOne>

            <S.RoundOne>
              <S.RoundText>건의 작성</S.RoundText>
            </S.RoundOne>

            <S.RoundTwo>
              <S.RoundText2>작성 완료</S.RoundText2>
            </S.RoundTwo>
          </S.RoundDiv>

          <S.CongraturationMessage>
            작성 완료! 2~3일 이내에 메일이 갈 꺼라굿~!
          </S.CongraturationMessage>
          <S.RacunImage src={'/RacunHappy.png'} />
        </S.WhiteBackground>
      </S.BackgroundColor>
    </>
  );
}

export default Endgunhe;
