import styled from 'styled-components';
import '../fonts/FontOnly.css';

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 433.83px;
  left: 0px;
  top: 70px;

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
`;

export const plusNoticebutton = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px 20px 20px 0px;
  background-color: #003C82;
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 검정색 */
  z-index: 5; /* 드롭다운보다 아래 */
`;

export const NoticeDropdown = styled.div`
  position: fixed; /* 화면에 고정 */
  top: 50%; /* 수직 중앙 */
  left: 50%; /* 수평 중앙 */
  transform: translate(-50%, -50%); /* 중앙으로 이동 */
  background-color: white; /* 배경색 */
  border: 1px solid #ccc; /* 테두리 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 */
  z-index: 10; /* 다른 요소 위에 표시 */
  padding: 10px; /* 패딩 추가 */
`;

export const NoticeTmfDiv = styled.div`
  position: absolute;
  width: 475px;
  height: 318px;
  left: 204px;
  top: 130.95px;
  background: #ffffff;
  box-shadow: 0px 3.16667px 11.875px rgba(0, 0, 0, 0.25);
  border-radius: 9.5px;
  display: flex;
  justify-content: flex-end;
`;

export const NoticeText = styled.span`
  position: absolute;
  width: 85px;
  height: 28px;
  left: 30px;
  top: 30px;

  font-family: 'Pretendard'; /* 오타 수정 */
  font-style: normal;
  font-weight: 700;
  font-size: 21.1111px;
  line-height: 31px;
  letter-spacing: -0.005em;
  color: #000000;
`;

export const MainBodyBlueStick = styled.span`
  width: 478.17px;
  height: 19px;
  left: 510.36px;
  top: 514.11px;

  background: #003c82;
  border-radius: 12.6667px;
`;

export const MainMenus = styled.span`
  width: 268px;
  height: 144px;
  margin: 0 auto;

  display: flex;

  font-family: 'Pretendard'; /* 오타 수정 */
  font-weight: 600; /* px 제거 */
  border-radius: 16px;
  background: white;
`;

export const MainMenu = styled.div`
  display: flex;
  position: absolute;
  gap: 80px;

  width: 1300px;
  height: 144px;

  top: 600px;

  filter: drop-shadow(0px 5.27778px 7.38889px #99A1B5);
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
  font-family: 'Pretendard'; /* 오타 수정 */
  font-style: normal;
  font-weight: 1000;
  font-size: 16.8889px;
  line-height: 24px;
  letter-spacing: -0.005em;
  color: #444444;
  cursor: pointer;
`;

export const NoticeInput = styled.input`
  width: 100%; /* 입력 필드의 너비 */
  padding: 10px; /* 패딩 */
  margin-top: 10px; /* 위쪽 여백 */
  border: 1px solid #ccc; /* 테두리 */
  border-radius: 5px; /* 모서리 둥글게 */
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #003C82;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const NoticeDiv = styled.div`
  z-index: 4;
  position: relative;
  width: 500px;
  height: 500px;
  background-color: white;
  top: -50px;
  left: 300px;
  box-shadow: 0px 3.16667px 11.875px rgba(0, 0, 0, 0.25);
  border-radius: 9.5px;
  display: block;
  justify-content: center;
  align-items: center;
`