import {useCallback} from 'react';
import useDownloadFile from '../utility-hooks/useDownloadFile';

type UseDownloadImage = {
  handleDownload: () => void;
};

const useDownloadImage = (editedImageSrc: string | null): UseDownloadImage => {
  const {downloadFile} = useDownloadFile();

  const handleDownload = useCallback(() => {
    if (editedImageSrc) {
      downloadFile(editedImageSrc);
    }
  }, [editedImageSrc]);

  return {handleDownload};
};

export default useDownloadImage;
