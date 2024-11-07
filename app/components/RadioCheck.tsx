  import React from 'react';
  import * as S from '../styles/DoorCloth1Css';

  interface RadioLabelProps {
    radioLabelText: string;
    disradioLabelText: string;
    name: string;
  }

  export const RadioCheck: React.FC<RadioLabelProps> = ({ radioLabelText, disradioLabelText, name }) => {
    return (
      <>
        <S.RadioLabel>
          <S.RadioButton name={name} value="yes" required />
          {radioLabelText}
        </S.RadioLabel>
        <S.RadioLabel>  
          <S.RadioButton name={name} value="no" required />
          {disradioLabelText}
        </S.RadioLabel>
      </>
    );
  };

  export default RadioCheck;
