'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import React from 'react'
import * as S from '../styles/ImageUp';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <>
         
        {previewUrl && (
          <S.ImageDiv>
            <S.attachImage src={previewUrl}/>
          </S.ImageDiv>
      )}
      <S.attachInput type="file" accept="image/*" onChange={handleImageChange} />
    </>
  );
};

export default ImageUpload;
