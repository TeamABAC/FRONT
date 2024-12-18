'use client'
import React, {useState} from 'react'
import * as S from '../styles/signin-in'
import { useRouter } from "next/navigation";
import axios from 'axios';

function sigin() {

const router=useRouter();
const [EmailValue,setEmailValue]=useState("");
const [PasswordValue,setPasswordValue]=useState("");

const JWT_EXPIRY_TIME=24*3600*1000;


const handlePaawordChange=(e:any) => {
setPasswordValue(e.target.value);
}
const handleEmailChange=(e:any) => {
  setEmailValue(e.target.value);
}

const handleSubmit=(e:any) => {
  const dto={
    email:EmailValue,
    password:PasswordValue,
  };


};

  return (
    <div>
      <S.ImageSettion> 
      <S.Logo src="/logowhite.png" alt="로고" />
      <S.LoginWhite>
          <S.LoginWhiteText>회원가입2</S.LoginWhiteText>
      <S.EmailInput value={EmailValue} onChange={handleEmailChange} type="email" placeholder=' 이름'></S.EmailInput>
      <S.EmailInputText>이름</S.EmailInputText>
      <S.PasswordInput value={PasswordValue} onChange={handlePaawordChange} type='password' placeholder='학번'></S.PasswordInput>
      <S.PasswordInputText>학번</S.PasswordInputText>
      
      <S.LoginButton>
        <S.LoginButtonText onClick={handleSubmit}>다음</S.LoginButtonText>
      </S.LoginButton>
      
      </S.LoginWhite>
      
      <S.Background src='/background2.png' alt="배경">
      </S.Background>
      </S.ImageSettion>
    </div>
  )
}

export default sigin;


