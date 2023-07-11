// useImageEditor.ts
import {useState, useEffect} from 'react';

import useHiddenFileInput from '../utility-hooks/useHiddenFileInput';
import useFileReader from '../utility-hooks/useFileReader';
import useImageFilter from '../utility-hooks/useImageFilter';
import useDownloadImage from './useDownloadImage';

import Palettes from '../../models/enums/Color/Palettes';

const useImageEditor = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {openFileSelector, file, input} = useHiddenFileInput('images/*');
  const imageOrigin = useFileReader(file);
  const {
    applyFilter,
    editedImageSrc,
    isLoading: isApply,
  } = useImageFilter(imageOrigin || '', Palettes.BG_PCS7);
  const {handleDownload} = useDownloadImage(editedImageSrc);

  useEffect(() => {
    if (imageOrigin) {
      setIsLoading(true);
    }
  }, [imageOrigin]);

  return {
    isLoading,
    imageOrigin,
    input,
    openFileSelector,
    applyFilter,
    isApply,
    editedImageSrc,
    handleDownload,
  };
};

export default useImageEditor;
