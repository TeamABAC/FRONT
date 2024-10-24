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
`;

export const NoticeText = styled.span`
  position: absolute;
  width: 85px;
  height: 28px;
  left: 30px;
  top: 30px;

  font-fmaily: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 21.1111px;
  line-height: 31px;
  letter-spacing: -0.005em;
  color: #000000;
`;

export const MainBodyBlueStick = styled.span`
  position: absolute;
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

  font-fmaily: 'Pretendard';
  font-weight: 600px;
  border-radius: 16px;
  background: white;
`;

export const MainMenu = styled.div`
  display: flex;
  position: absolute;
  gap: 80px;
  width: 100%
  height: 144px;
  top: 600px;
  left: 270px;
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
`;

export const MenuText = styled.span`
  width: 90px;
  height: 24px;

  margin-left: -44px;
  margin-top: 78px;

  font-fmaily: 'Pretendard';
  font-style: normal;
  font-weight: 1000;
  font-size: 16.8889px;
  line-height: 24px;
  letter-spacing: -0.005em;
  color: #444444;
`;
