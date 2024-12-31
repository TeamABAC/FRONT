import styled from "styled-components";


export const ImageSettion = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
position:absolute;
left:120px;  
top:20px;
`;

export const Background = styled.img`
display: flex;
height: 100vh;  // 화면 전체 높이
width: 100vw;   // 화면 전체 너비
position: absolute;
left: 0px;
top: 0px;
z-index:-1;
`;

export const LoginWhite=styled.div`
width: 400px;
height: 340px;
background-color:#ffff;
border-radius:15px;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
position: relative;
`

export const LoginWhiteText=styled.span`
font-family: 'Pretendard';
font-weight: 700;
font-size: 24px;
color: #000000;
position:relative;
top:-20px;
display:flex
`

export const EmailInput=styled.input`
width: 304px;
height: 24px;
left: 608px;
top: 337px;
background-color: #f4f4f4;
color: #000000;
border-radius: 8px;
padding:10px;
outline: none;
border:none;  
`

export const PasswordInput=styled.input`
width: 304px;
height: 24px;
left: 608px;
top: 337px;
background-color: #f4f4f4;
color: #000000;
border-radius: 8px;
top:-20px;
padding:10px;
margin-top: 20px;
border:none;
`

export const LoginButton=styled.div`
width: 96px;
height: 48px;
margin-top:20px;
background-color: #003C82;
border-radius:18px;
display: flex;
align-items: center;
justify-content: center;
cursor:pointer;
`

export const LoginButtonText=styled.span`
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FAFAFA;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`
export const LoginText=styled.span`
font-family: 'Pretendard';
font-style: normal;
font-weight: 200;
font-size: 13px;
line-height: 100%;
display: flex;
align-items: center;
color: #777777;
position: absolute;
bottom: 20px;
left: 120px;
`

export const LogininText=styled.span`
font-family: 'Pretendard';
font-style: normal;
font-weight: 200;
font-size: 13px;
line-height: 100%;
display: flex;
align-items: center;
color: #003C82;
position: absolute;
bottom: 20px;
right: 150px;
cursor:pointer;
`