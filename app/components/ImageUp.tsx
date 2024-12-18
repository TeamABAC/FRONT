// ImageUpload.tsx
'use client';
import { useState } from 'react';
import React from 'react';
import * as S from '../styles/ImageUp';

const ImageUpload: React.FC = () => {
  const [fileName, setFileName] = useState<string>('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <S.ImageDiv>
      <S.FileInput 
        type='file' 
        id='file-upload' 
        accept='image/*' 
        onChange={handleImageChange} 
      />
      <S.FileInputLabel htmlFor='file-upload'>파일 선택</S.FileInputLabel>
      {fileName && <S.FileName>{fileName}</S.FileName>}
    </S.ImageDiv>
  );
};

export default ImageUpload;
