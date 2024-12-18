import styled from 'styled-components';

export const MyPageBodyDiv = styled.div`
  width: 100%;
  height: 900px;
  background: linear-gradient(180deg, #6092f2 0%, #295f9f 100%);
`;

export const MyPageTextDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 220px;
  height: 80px;
  left: 98px;
  top: 152px;
  background: #ffffff;
  border: 1px solid #a9bad1;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none; /* 드래그 방지 */
`;

export const MyPageText = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;
  color: #4D80D5;
  user-select: none;
`;


