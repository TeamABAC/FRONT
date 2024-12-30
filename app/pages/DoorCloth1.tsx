'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import RadioCheck from '../components/RadioCheck';
import * as S from '../styles/DoorCloth1Css';
import axios from 'axios';

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
          <S.PrivateContainer>1. 개인정보 수집 항목 
                              어떤 개인정보를 수집하는지 구체적으로 명시 (예: 이름, 이메일, 전화번호 등)
                              
                              2. 개인정보 수집 목적 
                              수집한 개인정보를 사용하는 목적을 명확하게 기술 (예: 서비스 제공, 사용자 지원, 마케팅, 광고 등)
                              
                              3. 개인정보 보유 및 이용 기간
                              개인정보를 보유하는 기간 및 보유 후 처리 방법 (예: 계정 삭제 시 개인정보 삭제, 일정 기간 후 자동 삭제 등)

                              4. 개인정보의 제3자 제공
                              개인정보를 제3자에게 제공하는 경우, 그 제공 대상과 목적을 명시. (단, 법적인 요구가 있을 경우 제외)

                              5. 개인정보 보호 방법
                              개인정보 보호를 위한 보안 조치 (예: 암호화, 보안 서버 사용, 접근 제한 등)

                              6. 이용자의 권리
                              개인정보에 대한 접근, 수정, 삭제 요청이 가능한지 여부와 그 방법 (예: 회원 탈퇴 시 개인정보 삭제)

                              7. 쿠키 사용
                              쿠키 사용 여부와 쿠키를 통한 정보 수집 방법 (예: 사용자 맞춤형 서비스 제공을 위한 쿠키 사용)

                              8. 개인정보 보호 책임자
                              개인정보 보호 담당자(연락처, 이메일 등)의 정보 제공

                              9. 정책 변경 시 안내
                              개인정보 약관이 변경될 경우 이를 공지하는 방법 및 변경된 사항에 대한 알림 절차

                              10. 연락처
                              개인정보 관련 문의나 문제가 있을 때 연락할 수 있는 연락처 정보 제공</S.PrivateContainer>

          <S.agreeCheckSpan>개인정보 수집 및 이용 동의 여부</S.agreeCheckSpan>
          <S.AgreeCheckDiv $Agreetop='650px' $Agreeleft='700px'>
            <RadioCheck radioLabelText='동의' disradioLabelText='비동의' name='agree' onChange={handlePublic} value='agree'></RadioCheck>
          </S.AgreeCheckDiv>

          <S.DivideLine top='730px'></S.DivideLine>

          <S.publicTextSpan>건의 공개 여부</S.publicTextSpan>
          <S.AgreeCheckDiv $Agreetop="760px" $Agreeleft="700px">
            <RadioCheck radioLabelText="공개" disradioLabelText="비공개" name="visibility" onChange={handlePublic} value='private'/>
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
