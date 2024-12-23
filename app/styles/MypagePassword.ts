import styled  from "styled-components";


export const MyPageBodyDiv = styled.div`
  width: 100%;
  height:855px;
  background: linear-gradient(180deg, #6092f2 0%, #295f9f 100%);
  display:flex;
  justify-content: center;
  `;

export const MypageText=styled.span`
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 57px;
color: #FFFFFF;
position:absolute;
left: 140px;
top: 120px;
`

export const White=styled.div`
width: 1036px;
height: 653px;
background: #FFFFFF;
box-shadow: 0px 3.16667px 7.91667px rgba(0, 0, 0, 0.25);
border-radius: 40px 40px 0px 0px;
display:flex;
margin-top: 200px;
flex-direction: column;
`

export const PasswordText=styled.span`
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 57px;
position:absolute;
left: 300px;
top: 210px;
`

export const NowPasswordText=styled.span`
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 19.5px;
line-height: 21px;
display: flex;
align-items: center;
color: #000000;
margin-top:100px;
`
export const NowpassIput=styled.input`
background: #F4F4F4;
border-radius: 10px;
outline: none;
margin-top:20px;
width:800px;
height:65px;
padding-left: 20px;
&:focus 
{
  color: #000;
  }
  `
  
  export const Nopasswordhap=styled.div`
  margin-left:110px;
  `
  
  export const NewpasswordText=styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  color: #000000;
  position:relative;
  left:110px;
  top:40px;
`

export const NewInput=styled.input`
background: #F4F4F4;
border-radius: 10px;
outline: none;
width:800px;
height:65px;
position:relative;
left:110px;
top:55px;
padding-left: 20px;
&:focus 
{
  color: #000;
  }
`  
export const NewInputCheck=styled.input`
background: #F4F4F4;
border-radius: 10px;
outline: none;
width:800px;
height:65px;
position:relative;
left:110px;
top:70px;
padding-left: 20px;
&:focus 
{
  color: #000;
  }
`

  export const Button=styled.button`
  background-color:#003C82;
  width:192px;
  height:48px;
  border-radius:16px;
  position:relative;
  left:430px;
  top:200px;
  `
  
  export const ButtonText=styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color:#00000;
  `