import styled from 'styled-components';
import '../fonts/FontOnly.css';

export const HompageIcon = styled.img`
  width: 85px;
  height: 40px;

  left: 120px;
  top: 15px;

  position: absolute;

  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;

  cursor: pointer;

`;

export const NavTmfdiv = styled.div`
  weight: 1520px;
  height: 70px;
  
  poosition: relative;

  background-color: white;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  display: inline-blok;
  
`;

export const NavText = styled.div`
  width: 100px;
  
  right: 500px;
  top: 25px;

  display: flex;
  gap: 30px;
  float: right;
  position:absolute;

`;

export const NavTexts = styled.span`
  float: right;

  width: 100px;
  height: 22px;

  font-fmaily: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;

  color: #444444;

  flex: none;
  order: 0;
  flex-grow: 0;

  cursor: pointer;

`;

export const NavLogOut = styled.div`
  float: right;

  width: 96px;
  height: 38px;

  position: absolute;
  right: 70px;
  top: 15px;

  background: #003c82;
  border-radius: 11.0833px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const NavLogOutText = styled.span`
  font-fmaily: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;

  color: #fafafa;
`;
