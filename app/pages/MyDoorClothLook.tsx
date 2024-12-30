"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import * as S from '../styles/MyDoorClothLook';

function MyDoorClothLook() {
  const router = useRouter();

  const gotoResult = () => {
    try {
      router.push('/Chekoutgunhe');
    } catch (error) {
      console.error('페이지 이동 중 오류 발생:', error);
    }
  };

  return (
    <>
      <NavBar />
      <S.Background src="/doorclothes.png" alt="Door Clothes Background" />
      <S.White>
        <S.Option>
          <S.OptionText>시설관리</S.OptionText>
        </S.Option>

        <S.Hap>
          <S.DivUp>
            <S.Text>의자가 고장이 났어요</S.Text>
          </S.DivUp>
            <S.Content>
              <S.Text>12월 29일 3층 홈베 의자가 고장이 났어요</S.Text>
            </S.Content>
        </S.Hap>

        <S.Goodbutton>
          <S.GoodImage src="/Good.svg" alt="Good" />
          <S.GoodText>추천</S.GoodText>
        </S.Goodbutton>
      </S.White>
    </>
  );
}

export default MyDoorClothLook;
