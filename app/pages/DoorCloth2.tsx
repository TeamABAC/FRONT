'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import ImageUp from '../components/ImageUp';
import RadioCheck from '../components/RadioCheck';
import * as S from '../styles/DoorCloth2Css';
import { useUser } from '../context/UserContext';
import axios from 'axios';

function DoorCloth2() {
  const router = useRouter();
  const { userData } = useUser(); // userData 가져오기
  const [selectedOptions, setSelectedOptions] = useState<{ value: number, label: string, disabledLabel: string }[]>([]); // 선택된 옵션들을 객체 배열로 관리
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [file, setFile] = useState<File | null>(null); // 첨부 파일 상태

  // 선택된 옵션을 처리하는 함수
  function handleOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    let option: { value: number, label: string, disabledLabel: string } | null = null;

    if (value === '학교폭력 건의') {
      option = { value: 1, label: '학교폭력 건의', disabledLabel: '급식 건의' };
    } else if (value === '급식 건의') {
      option = { value: 2, label: '급식 건의', disabledLabel: '학교폭력 건의' };
    } else if (value === '시설관련 건의') {
      option = { value: 3, label: '시설관련 건의', disabledLabel: '기타 건의' };
    } else if (value === '기타 건의') {
      option = { value: 4, label: '기타 건의', disabledLabel: '시설관련 건의' };
    }

    if (option) {
      setSelectedOptions(prev => {
        const isAlreadySelected = prev.some(opt => opt.value === option.value);
        if (isAlreadySelected) {
          return prev.filter(opt => opt.value !== option.value);
        } else {
          return [...prev, option];
        }
      });
    }
  }

  async function handleSubmit() {
    if (!title || !body) {
      alert('모든 필드를 입력해주세요!');
      return;
    }

    try {
      const payload = {
        title,
        body,
      };

      const response = await axios.post(
        'https://322f-2001-e60-a017-870d-7967-ae08-f4c-c7de.ngrok-free.app/api/post/create', // 백엔드 엔드포인트
        payload
      );

      console.log('제출 성공:', response.data);
      router.push('/DoorCloth3'); // 성공 시 다음 페이지로 이동
    } catch (error: any) {
      console.error('제출 실패:', error.response?.data || error.message);
      alert('제출 중 오류가 발생했습니다.');
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
              <RadioCheck
                radioLabelText="학교폭력 건의"
                disradioLabelText="급식 건의"
                name="checklist"
                onChange={handleOptionChange}
                value="학교폭력 건의"
              />
              <RadioCheck
                radioLabelText="시설관련 건의"
                disradioLabelText="기타 건의"
                name="checklist"
                onChange={handleOptionChange}
                value="시설관련 건의"
              />
            </S.RadioCheckDiv>
            <S.GrayText>※신청하실 건의의 유형을 선택해주십시오.</S.GrayText>
          </S.CheckBoxDiv>

          <S.DivideLine top="730px" />

          <S.InputText $top="800px">건의 제목</S.InputText>
          <S.TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <S.InputText $top="960px">건의 사항</S.InputText>
          <S.ContentInput
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <S.InputText $top="1450px">첨부 파일</S.InputText>
          <ImageUp/>

          <S.Checkbutton onClick={handleSubmit}>
            <S.CheckText>제출</S.CheckText>
          </S.Checkbutton>
        </S.WhiteDiv>
      </S.BackgroundColor>
    </>
  );
}

export default DoorCloth2;
