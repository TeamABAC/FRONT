// styles/ImageUp.js
import styled from "styled-components";

export const ImageDiv = styled.div`
  position: absolute;
  width: 900px;
  height: 50px;
  top: 1500px;
  background-color: #F4F4F4;
  display: flex;
  align-items: center; 

  box-sizing: border-box;
  border: 0.5px solid #000000;
  border-radius: 5px 0 0 5px; /* 왼쪽 위와 왼쪽 아래만 둥글게 설정 */
`;

export const FileInput = styled.input`
  display: none;
  position: absolute;
  height: 40px;
`;

export const FileInputLabel = styled.label`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #003CB2;
  color: white;
  border-radius: 5px; /* 레이블의 모든 모서리를 둥글게 설정 */
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
