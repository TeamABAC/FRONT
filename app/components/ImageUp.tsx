'use client';
import { useState } from 'react';
import React from 'react';
import * as S from '../styles/ImageUp';

const ImageUpload = () => {
  return (
    <>
    <S.ImageDiv>
      <S.FileInput type='file' />
    </S.ImageDiv>
    </>
  );
};

export default ImageUpload;
