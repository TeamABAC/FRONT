'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from '../styles/DoorClothLook';

function Seegunhe() {
const router = useRouter();

  return (
  <>
    <NavBar />
    <S.Background src={'Doorclothes.png'}></S.Background>
    <S.White>
      <S.Option>
        <S.OptionText>급식</S.OptionText>
      </S.Option>
      <S.Contenthap>
          <S.ContentUp>
            <S.DeleteButton>
              <S.DeleteButtonText>삭제</S.DeleteButtonText>
            </S.DeleteButton>
            <S.FixButton>
              <S.FixButtonText>수정하기</S.FixButtonText>
            </S.FixButton>
          </S.ContentUp>
        <S.Content />
      </S.Contenthap>

      <S.Goodbutton>
        <S.GoodImage src={'Good.svg'}></S.GoodImage>
        <S.GoodText>추천</S.GoodText>
      </S.Goodbutton>

      
    </S.White>
  </>
  )
}

export default Seegunhe;