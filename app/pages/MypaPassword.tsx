"use client"
import {use} from 'react';
import NavBar from '../components/NavBar';
import * as S from '../styles/MypagePassword'

function Mypage(){
return(
<>
  <NavBar/>
  <S.MyPageBodyDiv>
    <S.MypageText>마이페이지</S.MypageText>
    <S.PasswordText>비밀번호</S.PasswordText>
    <S.White>
      <S.Nopasswordhap>
        <S.NowPasswordText>현재 비밀번호</S.NowPasswordText>
        <S.NowpassIput placeholder='현재 비밀번호' ></S.NowpassIput>
      </S.Nopasswordhap>
     
      <S.NewpasswordText>비밀번호</S.NewpasswordText>
   <S.NewInput placeholder='새 비밀번호' ></S.NewInput>
   <S.NewInputCheck placeholder='새 비밀번호 확인 ' ></S.NewInputCheck>

      <S.Button >
        <S.ButtonText>비밀번호 변경</S.ButtonText>
      </S.Button>
    </S.White> 
  </S.MyPageBodyDiv>
</>
);

}

export default Mypage