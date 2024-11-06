import styled from "styled-components";

export const ImageDiv = styled.div`
  position: absolute;
  width: 900px;
  height: 50px;
  top: 1500px;

  background-color: black;
`;

export const FileInput = styled.input`
  display: none;
  position: absolute;
  left: 20px;
  heght: 40px;

  & + label {
    display: inline-block;
    padding: 10px 20px;
    background-color: #003CB2;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #002b8a;
    }
  }
`;

export const FileInputLabel = styled.label`
 font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
` 