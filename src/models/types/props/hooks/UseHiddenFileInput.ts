type UseHiddenFileInput = {
  openFileSelector: () => void;
  file: File | null;
  clearFile: () => void;
  input: JSX.Element;
};

export default UseHiddenFileInput;
