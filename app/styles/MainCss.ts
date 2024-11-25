import styled from 'styled-components';
import '../fonts/FontOnly.css';

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 433.83px;

  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`;

export const MainBodyDiv = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  height: 900px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const plusNoticebutton = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px 20px 20px 0px;
  background-color: #003c82;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const plusEmote = styled.img`
  width: 15px;
  height: 15px;
`;

export const Overlay = styled.div`
  position: fixed; /* 화면에 고정 */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 검정색 */
  z-index: 5; /* 공지사항 뒤에 위치 */
`;

export const NoticeDiv = styled.div`
  position: fixed; /* 화면 고정 */
  z-index: 10; /* Backdrop 위 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 500px;
  background: #ffffff; /* 흰 배경 */
  backdrop-filter: blur(2px); /* 배경 블러 효과 */
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;


export const NoticeMaketext = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 33.7778px;
  line-height: 40px;
  letter-spacing: -0.005em;
  color: #000000;
  position: absolute;
  top: 40px;
`;

export const NoticeCloseX = styled.img`
  position: absolute;
  right: 40px;
  top: 40px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const NoticeTmfDiv = styled.div`
  position: absolute;
  top: 70px;
  left: 140px;
  width: 475px;
  height: 318px;
  background: #ffffff;
  box-shadow: 0px 3.16667px 11.875px rgba(0, 0, 0, 0.25);
  border-radius: 9.5px;
  display: flex;
  justify-content: flex-end;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center; /* 수직 정렬 */
  margin-top: 10px; /* 아래 여백 */
  width:100%;
  height:auto;
  gap:20px;
`;

export const bodyRow = styled.div`
  display: flex;
  align-items: center; /* 수직 정렬 */
  widht: 100%;
  height: auto;
  gap: 20px;
  margin-top: 20px;
`;

export const noticeTypeContainer = styled.div`
  border: 1px solid #000; /* 큰 테두리 */
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 660px;
  height: 291px;
  margin-top: 10px;
  display: inline;
`

export const noticeTitleInput = styled.input`
  width: 500px;
  height: 30px;
  color: black;
  border: 1px solid #000; /* 큰 테두리 */
  padding: 10px;
  font-size: 20px;
`
export const noticeBodyInput = styled.textarea`
  width: 500px;
  height: 200px;
  color: black;
  resize: none;
  padding-left: 10px;
  padding-top: 10px;
  border: 1px solid #000;
  font-size: 20px;
  line-height: 1.5px;
`

export const noticeInpuText = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 21.1111px;
  line-height: 31px;
  color: black;
`

export const NoticeText = styled.span`
  position: absolute;
  width: 85px;
  height: 28px;
  left: 30px;
  top: 30px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 21.1111px;
  line-height: 31px;
  letter-spacing: -0.005em;
  color: #000000;
`;

export const SubmitButton = styled.span`
position: absolute;
width: 220px;
height: 50px;
background: #003C82;
border-radius: 9.5px;
bottom:30px;
left:240px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
export const SubmitText = styled.span`
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 28.5px;
line-height: 34px;
color: white;
`

export const MainBodyBlueStick = styled.div`
  width: 478.17px;
  height: 19px;
  left: 510.36px;
  top: 514.11px;
  background: #003c82;
  border-radius: 12.6667px;
`;

export const MainMenus = styled.div`
  width: 268px;
  height: 144px;
  margin: 0 auto;
  display: flex;
  font-family: 'Pretendard';
  font-weight: 600;
  border-radius: 16px;
  background: white;
  z-index: 1; /* 메뉴 기본 레벨 */
`;

export const MainMenu = styled.div`
  display: flex;
  position: absolute;
  width: 1300px;
  height: 144px;
  top: 500px;
  filter: drop-shadow(0px 5.27778px 7.38889px #99a1b5);
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const MenuIconBlue = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 20px;
  margin-left: 20px;
  background: #003c82;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuIcon = styled.img`
  width: 20px;
  height: 20px;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  cursor: pointer;
`;

export const MenuText = styled.span`
  width: 90px;
  height: 24px;
  margin-left: -44px;
  margin-top: 78px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 1000;
  font-size: 16.8889px;
  line-height: 24px;
  letter-spacing: -0.005em;
  color: #444444;
  cursor: pointer;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  z-index: 1;
`;

