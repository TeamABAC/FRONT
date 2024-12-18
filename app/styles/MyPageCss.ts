import styled from 'styled-components';

export const MyPageAllBodyDiv = styled.div`
  width: 100%;
  height: 900px;
  background: linear-gradient(180deg, #6092f2 0%, #295f9f 100%);
  display:flex;
  justify-content: center;
`;

export const MyPageTextDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 220px;
  height: 80px;
  left: 70px;
  top: 120px;
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
  font-size: 40px;
  line-height: 70px;
  color: #4D80D5;
  user-select: none;
`;


export const nameContainer = styled.div`
  background-color: white;
  width: 900px;
  height: 140px;
  border-radius: 40px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 160px;
  margin-left: 140px;
`

export const classMailContainer = styled.div`
  background-color:white;
  width: 900px;
  height: 300px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 20px;
  margin-left: 140px;
`