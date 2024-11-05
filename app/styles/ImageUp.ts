// styles/ImageUp.js
import styled from "styled-components";

export const ImageDiv = styled.div`
  position: absolute;
  top: 1500px;
  width:900px;
  height:40px;
  max-width: 300px; /* 최대 너비 설정 */
  max-height: 300px; /* 최대 높이 설정 */
  overflow: scroll;
  background-color: black;
  border: 0.5px solid #000000;
  cursor: pointer; /* 클릭 가능함을 나타내는 커서 */
`;

export const attachImage = styled.img`
  width: 100%; /* div의 너비에 맞춤 */
  height: auto; /* 비율 유지 */
`;

export const attachInput = styled.input`
  position: absolute;
  top: 50px;
`;
