'use client';
import { useState } from 'react';
import React from 'react';
import * as S from '../styles/ImageUp';

const ImageUpload = () => {
  return (
    <>
      <S.ImageDiv>
        <S.FileInput type='file' id='file-upload' accept='image/*' />
        <S.FileInputLabel htmlFor='file-upload'>파일 선택</S.FileInputLabel>
      </S.ImageDiv>
    </>
  );
};

export default ImageUpload;