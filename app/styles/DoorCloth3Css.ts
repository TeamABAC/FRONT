import styled from 'styled-components';

export const BackgroundColor = styled.div`
  width: 100%;
  height: 1150px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
`;

export const WhiteBackground = styled.div`
  width: 1040px;
  height: 1050px;
  background-color: white;
  margin-top: 90px;

  display: flex;
  justify-content: center;

  box-shadow: 0px 3.16667px 7.91667px rgba(0, 0, 0, 0.25);
  border-radius: 15.8333px;
`;

export const NotificationText = styled.span`
  width: 100px;
  height: 55px;

  margin-top: 30px;

  font-fmaily: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 55px;
  color: #000000;
`;
export const DivideLine = styled.div`
  width: 900px;
  height: 1px;

  position: absolute;
  top: 300px;
  background-color: black;
`;

export const RoundDiv = styled.div`
  width: 1000px;
  hegiht: 130px;

  display: flex;
  justify-content: center;

  position: absolute;
  top: 400px;
  gap: 130px;
`;

export const RoundOne = styled.div`
  width: 150px;
  height: 150px;

  border-radius: 50%;
  border: 3.5px;

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
  border: 3.5px;

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

  align-items: center;
  text-align: center;

  color: white;
`;

export const CongraturationMessage = styled.span`
  position: absolute;
  width: 600px;
  height: 37px;
  top: 650px;

  font-style: normal;
  font-weight: 400;
  font-size: 25.3333px;
  line-height: 37px;
  text-align: center;

  color: #000000;
`;

export const RacunImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 700px;
`;

export const Mainbutton = styled.div`
  position: absolute;
  width: 237px;
  height: 56px;
  top: 1120px;
  background: #003C82;
  border-radius: 9.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MainText = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 28.5px;
  line-height: 34px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
`;