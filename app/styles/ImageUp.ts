// styles/ImageUp.js
import styled from "styled-components";

export const ImageDiv = styled.div `
  position: absolute;
  position: relative;
  width: 900px;
  height: 40px;
  top: 1500px;

  display:flex;
  justify-content: center;
`


export const FileInput = styled.input`
  
  /* 파일 버튼을 위한 스타일링 */
  & + label {
    display: inline-block;
    padding: 10px 20px;
    background-color: #0070f3;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #005bb5;
    }
  }
`