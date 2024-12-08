import styled from "styled-components";

export const BackgroundColor = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 1890px;
`;

export const WhiteDiv = styled.div`
  background-color: white;
  width: 1048px;
  height: 1800px;
  margin-top: 90px;
  position: relative;
  box-shadow: 0px 3.16667px 7.91667px rgba(0, 0, 0, 0.25);
  border-radius: 15.8333px 15.8333px 0px 0px;
  display: flex;
  justify-content: center;
  text-align: center;
  user-select: text;
`;

export const TendinousText = styled.span`
  width: 70px;
  height: 55px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 55px;

  position: absolute;
  color: #000000;
  top: 30px;
`;

interface DivideLineProps {
  top: string;
}

export const DivideLine = styled.div<{ top: string }>`
  width: 900px;
  height: 1px;
  position: absolute;
  top: ${({ top }) => top}; // top prop을 사용
  background-color: black;
`;

export const RoundDiv = styled.div`
  width: 1000px;
  height: 130px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 200px;
  gap: 130px;
`;

export const RoundOne = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3.5px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #f4f4f4;
`;

export const RoundTwo = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3.5px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #003c82;
`;

export const RoundText = styled.span`
  width: 120px;
  height: 35px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 25.3333px;
  line-height: 37px;
  color: #444444;
`;

export const RoundText2 = styled.span`
  width: 120px;
  height: 37px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 25.3333px;
  line-height: 37px;
  color: white;
  text-align: center;
`;

export const DivideBlueLine = styled.div`
  width: 898px;
  height: 50px;
  position: absolute;
  top: 400px;
  display: flex;
  align-items: center;
  background: #003c82;
  border-radius: 15.8333px 15.8333px 0px 0px;
`;

export const DivideBlueText = styled.span`
  margin-left: 16px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
`;

export const CheckBoxDiv = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 900px;
  height: 170px;
  top: 500px;
  background: #EEF3F9;
  border: 1.8px solid #C7D2E1;
`;

export const CheckDivideText = styled.span`
  position: absolute;
  top: 30px;
  left: 30px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #444444;
`;

export const RadioCheckDiv = styled.div`
  position: absolute;
  width: 600px;
  top: 70px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const GrayText = styled.span`
  position: absolute;
  top: 100px;
  left: 40px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #828282;
`;

interface InputTextProps {
  $top: string; 
}

export const InputText = styled.span<{ $top: string }>`
  position: absolute;
  left: 80px;
  top: ${({ $top }) => $top}; // $top을 사용
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #444444;
`;

export const TitleInput = styled.input`
  box-sizing: border-box;
  position: absolute;
  width: 900px;
  height: 40px;
  left: 70px;
  top: 840px;
  background: #F4F4F4;
  border: 0.2px solid #000000;
  color: black;
  padding: 10px;
  font-weight: 500;
  font-family: 'Pretendard';
  font-style: normal;
`;

export const ContentInput = styled.textarea`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  width: 900px;
  height: 400px;
  left: 70px;
  top: 1000px;
  background: #F4F4F4;
  border: 0.2px solid #000000;
  color: black;
  padding: 10px;
  font-weight: 700;
  font-family: 'Pretendard';
  font-style: normal;
  line-height: 20px;
  resize: none;
`;

export const Checkbutton = styled.div`
  position: absolute;
  width: 237px;
  height: 56px;
  top: 1680px;
  background: #003C82;
  border-radius: 9.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CheckText = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 28.5px;
  line-height: 34px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
`;