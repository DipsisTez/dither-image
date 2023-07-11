type UseDownloadFile = {
  downloadFile: (url: string, filename?: string) => Promise<void>;
  loading: boolean;
  error: string | null;
};

export default UseDownloadFile;
