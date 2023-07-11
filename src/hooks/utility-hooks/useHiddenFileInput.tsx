import {useState, useRef, ChangeEvent} from 'react';
import UseHiddenFileInput from '../../models/types/props/hooks/UseHiddenFileInput';

const useHiddenFileInput = (accept?: string): UseHiddenFileInput => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const openFileSelector = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const clearFile = () => {
    setFile(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return {
    openFileSelector,
    file,
    clearFile,
    input: (
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{display: 'none'}}
        accept={accept}
      />
    ),
  };
};
export default useHiddenFileInput;
