import React from 'react';
import MainContent from '../../componets/MainContent';
import useImageEditor from '../../hooks/composite-hooks/useImageEditor';

import './style.css';

const ImageEditor = () => {
  const {
    isLoading,
    imageOrigin,
    input,
    openFileSelector,
    applyFilter,
    isApply,
    editedImageSrc,
    handleDownload,
  } = useImageEditor();

  return (
    <>
      <MainContent
        isLoading={isLoading}
        imageOrigin={imageOrigin}
        input={input}
        openFileSelector={openFileSelector}
        applyFilter={applyFilter}
        isApply={isApply}
        editedImageSrc={editedImageSrc}
        handleDownload={handleDownload}
      />
    </>
  );
};

export default ImageEditor;
