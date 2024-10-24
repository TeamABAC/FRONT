import styled from 'styled-components';

export const MyPageBodyDiv = styled.div`
  width: 100%;
  height: 700px;

  background: linear-gradient(180deg, #6092f2 0%, #295f9f 100%);
`;

export const MyPageTextDiv = styled.div <{isSelected: boolean}>`
  box-sizing: border-box;

  position: absolute;
  width: 281px;
  height: 80px;
  left: 98px;
  top: 152px;

  background: ${(props) => (props.isSelected ? "#ffffff" : "")};
  border: 1px solid #a9bad1;
  border-radius: 16px;

  dispaly: flex;
  justify-contetn: center;
  text-align: center;
`;
export const MyPageTextSelect = styled.span`
  width: 221px;
  height: 70px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;

  margin-right: 30px;
  color: #4d80d5;
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
  align-item: center;
  gap: 20px;
  flex-direction: column;
`;

export const ListText = styled.span`
  width: 144px;
  height: 25px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 21.1111px;
  line-height: 25px;

  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 0;

  align-item: center;
`;
