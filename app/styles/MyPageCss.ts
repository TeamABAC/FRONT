import styled from 'styled-components';

export const MyPageBodyDiv = styled.div`
  width: 100%;
  height: 700px;
  background: linear-gradient(180deg, #6092f2 0%, #295f9f 100%);
`;

export const MyPageTextDiv = styled.div<{ isSelected: boolean }>`
  box-sizing: border-box;
  position: absolute;
  width: 281px;
  height: 80px;
  left: 98px;
  top: 152px;
  background: ${(props) => (props.isSelected ? "#ffffff" : "")};
  border: ${(props) => (props.isSelected ? "1px solid #a9bad1" : "")};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer; /* 클릭 가능한 커서 */
  user-select: none; /* 드래그 방지 */
`;

export const MyPageText = styled.span<{ isSelected: boolean }>`
  width: 221px;
  height: 70px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;
  margin-right: 30px;
  color: ${(props) => (props.isSelected ? "#4d80d5" : "white")};
  user-select: none; /* 드래그 방지 */
`;

export const ListDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 184px;
  height: 160px;
  left: 125px;
  top: 267px;
  border: 2px solid #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;
`;

export const ListText = styled.span<{ isSelected: boolean }>`
  width: 184px;
  height: 35px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;

  color: ${(props) => (props.isSelected ? "#295f9f" : "#ffffff")}; /* 선택된 항목 색상 */
  background-color: ${(props) => (props.isSelected ? "#ffffff" : "transparent")}; /* 선택된 항목 배경 */
  
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  user-select: none;
`;
