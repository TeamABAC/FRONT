import styled from 'styled-components';

  export const BackgroundColor = styled.div`
    background-color: #f4f4f4;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 1080px;
  `;

  export const WhiteDiv = styled.div`
    background-color: white;
    width: 1048px;
    height: 990px;
    margin-top: 90px;
    position: relative;
    box-shadow: 0px 3.16667px 7.91667px rgba(0, 0, 0, 0.25);
    border-radius: 15.8333px 15.8333px 0px 0px;
    display: flex;
    justify-content: center;
    text-aligns: center;
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

  export const DivideLine = styled.div<DivideLineProps>`
    width: 900px;
    height: 1px;
    position: absolute;
    top: ${({ top }) => top};
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
  justy-content: center;
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

export const AgreeText = styled.span`
  width: 236px;
  height: 26px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 21.1111px;
  line-height: 26px;
  color: #000000;
`;

export const AgreeDiv = styled.div`
  width: 898px;
  height: 26px;
  position: absolute;
  top: 500px;
  left: 74px;
`;

export const AgreeContentDiv = styled.div`
  box-sizing: border-box;
  width: 898px;
  height: 52px;
  position: absolute;
  top: 540px;
  background: #ffffff;
  border: 1px solid #444444;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

export const AgreeContentText = styled.span`
  width: 543px;
  height: 18px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  margin-left: 10px;
`;


interface AgreeChckDivProps {
  Agreetop: string;
  Agreeleft: string;
}
export const AgreeCheckDiv = styled.div<AgreeChckDivProps>`
  box-sizing: border-box;
  position: absolute;
  position: relative;
  width: 222px;
  height: 55px;
  top: ${({ Agreetop }) => Agreetop};
  left:${({ Agreeleft }) => Agreeleft};
  background: #ffffff;
  border: 1px solid #444444;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  gap: 40px; 
  align-items: center;
`;


export const RadioLabel = styled.label`
 font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: black;
  display: flex;
  align-items: center;
`;

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #b0b8c1;
  border-radius: 50%;
  position: relative;
  margin-right: 5px;
  cursor: pointer;

  &:checked {
    border-color: #2c3e50;
  }

  &:checked::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #2c3e50;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const TextSpan = styled.span`
position: absolute;
width: 178px;
height: 24px;
left: 80px;
top: 720px;

text-aligns: center;

font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;

color: #000000;
`

export const Checkbutton = styled.div `
position: absolute;
width: 237px;
height: 56px;
left: 600x;
top: 881px;

background: #003C82;
border-radius: 9.5px;

display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
export const CheckText = styled.span `
font-family: 'Wanted Sans';
font-style: normal;
font-weight: 600;
font-size: 28.5px;
line-height: 34px;

text-align: center;

color: #FFFFFF;

cursor:pointer;
`
