import styled from "styled-components";

export const allDiv = styled.div`
    position:absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
`

export const Logo = styled.img`
    position:absolute;
    left:120px;  
    top:20px;
`;

export const Background = styled.img`
    height: 100vh;  // 화면 전체 높이
    width: 100vw;   // 화면 전체 너비
    z-index:-1;
    position:absolute;
`;
export const sigininWhite=styled.div`
    width: 400px;
    height: 422px;
    background-color:#ffff;
    border-radius:15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const siginWhiteText=styled.span`
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 24px;
    color: #000000;
    margin-top: 24px;
`
export const EmailInputText=styled.span`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 17px;
    color: #000000;
    margin-left:-280px;
    margin-top: 40px;
    margin-bottom: 10px;
`
export const EmailInput=styled.input`
    width: 334px;
    height: 28px;
    background-color: #f4f4f4;
    color: #000000;
    font-size: 18px;
    border-radius: 8px;
    padding:10px;
    border: none;
    margin-top: 4px;
`

export const classNumberInputText=styled.span`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 17px;
    color: #000000;
    margin-right: 300px;
    margin-top: 40px;
    margin-bottom: 4px;
`

export const classNumberInput=styled.input`
    width: 334px;
    height: 28px;
    margin-top: 10px;
    background-color: #f4f4f4;
    color: #000000;
    border-radius: 8px;
    padding:10px;
    border: none;
    font-size: 18px;
`
export const nextButton=styled.div`
    width: 112px;
    height: 56px;
    margin-top: 40px;
    background-color: #003C82;
    border-radius:18px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const nextButtonText=styled.span`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 19px;
    color: #FAFAFA;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
