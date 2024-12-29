import styled from "styled-components";


export const ImageSettion = styled.div``;

export const Logo = styled.img`
position:absolute;
left:120px;  
top:20px;
`;

export const Background = styled.img`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;  // 화면 전체 높이
width: 100vw;   // 화면 전체 너비
position: relative;
z-index:-1;
`;

export const LoginWhite=styled.div`
width: 400px;
height: 340px;
left: 560px;
top: 200px;
background-color:#ffff;
border-radius:15px;
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
height: 44px;
left: 608px;
top: 337px;
background-color: #f4f4f4;
color: #000000;
border-radius: 8px;
padding:10px;
outline: none
`

export const PasswordInput=styled.input`
width: 304px;
height: 44px;
left: 608px;
top: 337px;
background-color: #f4f4f4;
color: #000000;
border-radius: 8px;
top:-20px;
padding:10px;
margin-top: 20px;
outline: none
`

export const LoginButton=styled.div`
width: 96px;
height: 48px;
margin-top:40px;
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
position:relative;
right:50px;
top:20px;
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
position:relative;
left:18px;
top:7px;
cursor:pointer;
`