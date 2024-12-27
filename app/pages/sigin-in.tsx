'use client'
import React, { useState, useEffect } from 'react';
import * as S from '../styles/signin-in';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function Signin() {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', {
        userName,
        password,
        email,
      });
  
      if (response.status === 201) {
        console.log('Registration successful');
        router.push('/Sigin2');
      }
    } catch (error) {
      if (error.response) {
        console.log(`Error: ${error.response.data.message}`);
      } else {
        console.error('Error:', error);
      } 
    }

  };

  // ServerCheck as a component
  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await axios.get('/api/register');
        console.log('Server response:', response.data);
      } catch (error) {
        if (error.response) {
          console.error('Server error:', error.response.status, error.response.data);
        } else {
          console.error('Network error:', error.message);
        }
      }
    };

    checkServer();
  }, []); // Runs only once when the component loads

  return (
    <>
      <S.Logo src="/logowhite.png" alt="로고" />
      <S.Background src="/background2.png" alt="배경" />

      <S.LoginWhite>
        <S.LoginWhiteText>회원가입</S.LoginWhiteText>
        <form onSubmit={handleSubmit}>
          <S.EmailInputText>이메일</S.EmailInputText>
          <S.EmailInput type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
          <S.PasswordInputText>학번</S.PasswordInputText>
          <S.PasswordInput type="password" placeholder="학번" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <S.LoginButton>
            <S.LoginButtonText>다음</S.LoginButtonText>
          </S.LoginButton>
        </form>
      </S.LoginWhite>
    </>
  );
}

export default Signin;
