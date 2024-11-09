import React from 'react';
import * as S from '../styles/DoorCloth1Css';

interface RadioLabelProps {
  radioLabelText: string;
  disradioLabelText: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // onChange 핸들러 추가
}

export const RadioCheck: React.FC<RadioLabelProps> = ({ radioLabelText, disradioLabelText, name, onChange }) => {
  return (
    <>
      <S.RadioLabel>
        <S.RadioButton name={name} value="동의" required onChange={onChange} />
        {radioLabelText}
      </S.RadioLabel>
      <S.RadioLabel>  
        <S.RadioButton name={name} value="비동의" required onChange={onChange} />
        {disradioLabelText}
      </S.RadioLabel>
    </>
  );
};

export default RadioCheck;
