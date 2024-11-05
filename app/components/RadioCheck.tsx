import React from 'react';
import * as S from '../styles/DoorCloth1Css';

interface RadioLabelProps {
  radioLabelText: string;
  disradioLabelText: string;
}

export const RadioCheck: React.FC<RadioLabelProps> = ({ radioLabelText, disradioLabelText }) => {
  return (
    <>
      <S.RadioLabel>
        <S.RadioButton name="agree" value="yes" />
        {radioLabelText}
      </S.RadioLabel>
      <S.RadioLabel>
        <S.RadioButton name="agree" value="no" />
        {disradioLabelText}
      </S.RadioLabel>
    </>
  );
};

export default RadioCheck;
