import styled from "styled-components";

export const grayBackground = styled.div `
width: 100%x;
height: 1270px;
background: #F4F4F4;
`

export const whiteDiv = styled.div`
position: absolute;
width: 1046px;
height: 1200px;
left: 236px;
top: 139px;
background: #FFFFFF;
box-shadow: 0px 3.16667px 7.91667px rgba(0, 0, 0, 0.25);
border-radius: 15.83px 15.83px 0px 0px;
display:flex;
justify-content: center;
`

export const headText = styled.span`
position: absolute;
left: 80px;
top: 60px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 38px;
line-height: 45px;
text-align: center;
color: #000000;
`

export const listTop = styled.div`
position: absolute;
width: 900px;
height: 60px;
background: #F4F4F4;
border-bottom: 2px solid #000000;
box-sizing: border-box;
display:flex;
align-items: center;
margin-top: 160px;
`

interface listTopTextProps{
    absoluteLeft: string;
}

export const listTopText = styled.span<{absoluteLeft:string}>`
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 19px;
text-align: center;
letter-spacing: -0.005em;
color: #000000;
position: absolute;
left: ${({ absoluteLeft }) => absoluteLeft};
`

export const DDiv = styled.div`
width: 900px;
height: 60px;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px;
`

export const Sample = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 3fr 1fr 1fr; 
  gap: 100px 40px; 
  align-items: center; 
  width: 100%;  
  position: relative;
  right: 240px;
  bottom:350px;
  cursor:pointer;
  `;
interface SampleTextProps
{
    absoluteLeft: string;
}

export const Td = styled.span<{absoluteLeft:string}>`
position:absolute;
font-size: 16px;
width:200px;
line-height: 1.5;
color: #000000;
left: ${({ absoluteLeft }) => absoluteLeft};
`;

export const Sample2=styled.div`
display: grid;
grid-template-columns: 2fr 3fr 3fr 1fr; 
gap: 100px 40px; 
align-items: center; 
width: 100%;  
position: relative;
right: 608px;
bottom:290px;
cursor:pointer;
`