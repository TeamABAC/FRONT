import React from 'react';
import * as S from '../styles/DoorCloth1Css';

interface RadioLabelProps {
  radioLabelText: string;
  disradioLabelText: string;
  name: string; // name 프롭 추가
}

export const RadioCheck: React.FC<RadioLabelProps> = ({ radioLabelText, disradioLabelText, name }) => {
  return (
    <>
      <S.RadioLabel>
        <S.RadioButton name={name} value="yes" />
        {radioLabelText}
      </S.RadioLabel>
      <S.RadioLabel>
        <S.RadioButton name={name} value="no" />
        {disradioLabelText}
      </S.RadioLabel>
    </>
  );
};

export default RadioCheck;
