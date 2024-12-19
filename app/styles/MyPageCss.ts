import styled, { createGlobalStyle } from 'styled-components';

export const MyPageBodyDiv = styled.div`
  width: 100%;
  height: 900px;
  background: linear-gradient(180deg, #6092f2 0%, #295f9f 100%);
`;

export const MyPageTextDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 281px;
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


export const NameDiv=styled.div`


width: 1020px;
height: 164px;
background: #FFFFFF;
border-radius: 40px;
flex: none;
order: 0;
flex-grow: 0;
margin-left:350px;
margin-top:10px;

`
export const GungheText=styled.span`

width: 220px;
height: 29px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #000000;
position:relative;
left:50px;
top:60px;
`

export const Comment=styled.span`

width: 220px;
height: 29px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #000000;
position:relative;
left:75px;
top:60px;

`
export const NameText=styled.span`
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
text-align: right;

color: #ffffff;

`
export const InformDiv=styled.div`

width: 1020px;
height: 247px;
background: #FFFFFF;
border-radius: 40px;
flex: none;
order: 1;
flex-grow: 0;
margin-top:30px;
margin-left:350px;


`
export const ClassText=styled.span`

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;

color:#000000;
position:absolute;
left:400px;
top:500px;

`


export const EmailText=styled.span`

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
position:absolute;
color: #000000;
left:400px;
top:600px;
`

export const GuriGuri=styled.img`
position:relative;
left:1050px;
top:55px;
width: 248px;
height: 179px;

`
export const Class=styled.div`

`
export const Button=styled.button`
width: 82px;
height: 48.43px;
background: #003C82;
border-radius: 40px;
cursor:pointer;
ma

`
export const InputText=styled.span`

font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;

color: #FFFFFF;


 position: absolute;
  color: #aaa;
  left: 10px;
  font-size: 20px;
  bottom: 8px;
  transition: all 0.2s;



`
export const InputDiv=styled.div`
 position: relative;
  width: 300px;
  margin-left: 700px;
  margin-top: 100px;
`;
export const Input=styled.input`
font-size: 15px;
  color: #222222;
  width: 300px;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  position: relative;
  background: none;
  z-index: 5;

  &::placeholder {
    color: #aaaaaa;
  }

  &:focus {
    outline: none;
  }

  &:focus ~ label, &:valid ~ label {
    font-size: 16px;
    bottom: 40px;
    color: #666;
    font-weight: bold;
`
export const InputSpan=styled.span`
display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #666;
  width: 0;
  height: 2px;
  border-radius: 2px;
  transition: 0.5s;
`
export const InputStyle=createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
