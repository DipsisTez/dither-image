import {useState} from 'react';
import UseDownloadFile from '../../models/types/props/hooks/UseDownloadFile';

const useDownloadFile = (): UseDownloadFile => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getFileExtension = (url: string) => {
    const match = url.match(/\.([a-z0-9]+)(?:[?#]|$)/i);
    return match ? match[1] : '';
  };

  const generateRandomFilename = (extension: string) => {
    return `file-${Math.random().toString(36).substr(2, 9)}.${extension}`;
  };

  const downloadFile = async (url: string, filename?: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Ошибка загрузки файла');
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onload = () => {
        const link = document.createElement('a');
        link.href = reader.result as string;
        link.download =
          filename || generateRandomFilename(getFileExtension(url));
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      reader.readAsDataURL(blob);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {downloadFile, loading, error};
};

export default useDownloadFile;
