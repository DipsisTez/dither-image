type MainContentProps = {
  isLoading: boolean;
  imageOrigin: string | null;
  input: JSX.Element;
  openFileSelector: () => void;
  applyFilter: () => void;
  isApply: boolean;
  editedImageSrc: string | null;
  handleDownload: () => void;
};

export default MainContentProps;
