// useFileReader.ts
import {useState, useEffect} from 'react';

const useFileReader = (file: File | null) => {
  const [fileContent, setFileContent] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFileContent(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  return fileContent;
};

export default useFileReader;
