
import styled from "styled-components";

  export const Body=styled.div`
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  `

  export const Background=styled.img`
  width:100%;
  z-index:-1;
  `

  export const White=styled.div`
  background-color:#ffff;
  width:100%;
  height:900px; 
  position: absolute;
  top: 270px;
  border-radius: 100px 100px 0px 0px;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  `

  export const Option=styled.div`
  background-color:#B0C4EB;
  width:118px;
  height:56px;
  border-radius:20px;
  display:flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  top:-24px;
  left: 210px;
`

  export const OptionText=styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  `

  export const Contenthap=styled.div`
  position:absolute;
  left:230px;  
  top:140px;
  `

  export const Content = styled.textarea`
  background-color: #ffffff; /* 더 명확한 색상 코드 사용 */
  width: 1049px;
  height: 420px;
  resize: none;
  color: #000000; /* 잘못된 속성 제거 */
  border: solid 1px #000000;
  outline: none; /* 포커스 시 검정 테두리 제거 */
  padding: 10px; /* 텍스트와 테두리 간 여백 추가 */
  box-sizing: border-box; /* 테두리 포함한 크기 조정 */
  `;

  export const ContentUp=styled.div`
  border: 1px solid #000;
  padding: 16px; 
  background-color: #ffffff; 
  width: 1049px; 
  height:81px;
  display:flex;
  align-items: center;
  `
  
  export const Goodbutton=styled.button`
  flex-direction: row;
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 10px;
  position: absolute;
  width: 150px;
  height: 48px;
  left: calc(50% - 140px/2);
  top: 700px;
  border-color:#0171ED;
  border-style:solid;
  border-width:2px;
  border-radius:16px;
  justify-content:center;
  align-items:center;
  `

  export const GoodImage=styled.img`
  width:20px;
  height:20px;
  `

  export const GoodText=styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;
  display: flex;
  justify-content:center;
  align-items: center;
  text-align: center;
  color: #000000;
  `

  export const NewText=styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  position:relative;
  left:230px;
  top:50px;
  align-items: center;
  color: #000;
  letter-spacing: -0.005em;
  position:relative;
  `

  export const List=styled.div``

  export const Sample=styled.div`
  width:1048px;
  height:50px;
  position:relative;
  top:100px;
  left:30px;
  display:flex;
  `

  export const SampleText=styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #000;
  position:relative;
  left:300px;
  `

  export const Option2=styled.div`
  width: 50px;
  height: 25px;
  background: #B0C4EB;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content:center;
  position:relative;
  left:180px;
  `


  export const Option2Text=styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #ffff;
  `

  export const View=styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #666666;
  position:relative;
  left:1200px;
  `

  export const contentArea = styled.textarea`
  resize: none;
  `

  export const Texte=styled.span`
  color:#000;
  position:relative;
  left:50px;
  `