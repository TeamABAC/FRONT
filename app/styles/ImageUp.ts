// styles/ImageUp.js
import styled from "styled-components";

export const ImageDiv = styled.div`
  position: absolute;
  width: 900px;
  height: 50px;
  top: 1500px;
  background-color: black;
  display: flex; /* 플렉스 컨테이너 설정 */
  align-items: center; /* 수직 중앙 정렬 */
`;

export const FileInput = styled.input`
  display: none;
  position: absolute;
  left: 20px;
  height: 40px; /* 파일 입력 높이 */
`;

export const FileInputLabel = styled.label`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  margin-left: 20px; /* 왼쪽 여백 */
  cursor: pointer; /* 커서 포인터 */
  padding: 10px 20px; /* 패딩 */
  background-color: #003CB2; /* 배경색 */
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #002b8a;
  }
`;

export const FileName = styled.span`
  margin-left: 60px;
  color: black;
  font-size: 16px;
`;
