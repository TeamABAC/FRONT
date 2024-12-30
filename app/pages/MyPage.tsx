"use client"
import { use } from 'react';
import NavBar from '../components/NavBar';
import * as S from '../styles/MyPageCss';
import { useRouter } from 'next/navigation';

function Mypage() {
  const router = useRouter();

  function goChange() {
    router.push('/MyPagePassword');
  }

  return (
    <>
      <NavBar />
        <S.MyPageBodyDiv>

        <S.MyPageTextDiv>
          <S.MyPageText>마이페이지</S.MyPageText>
        </S.MyPageTextDiv>

        <S.GuriGuri src="/GuriGuri.svg" alt="구리구리 이미지" />

          <S.NameDiv>
            <S.QuantityText>건의 : ~개</S.QuantityText>
            <S.QuantityText>댓글 : ~개</S.QuantityText>
            <S.NameText>박서현님</S.NameText>
          </S.NameDiv>

          <S.personalInformationDiv>
            <S.ClassText>학번</S.ClassText>
            <S.personalValue>1학년 1반</S.personalValue>
            <S.EmailText>이메일</S.EmailText>
            <S.personalValue>s24005@gsm.hs.kr</S.personalValue>
            
            <S.Button>
             <S.ButtonText>수정</S.ButtonText>
            </S.Button>
          </S.personalInformationDiv>

          <S.PasswordDiv>
            <S.PasswordText>비밀번호</S.PasswordText>
            <S.myPassword type='password' readOnly></S.myPassword>
            <S.PasswordChange onClick={ goChange }>비밀번호 변경</S.PasswordChange>
          </S.PasswordDiv>
        </S.MyPageBodyDiv>
    </>
  );
}

export default Mypage;
