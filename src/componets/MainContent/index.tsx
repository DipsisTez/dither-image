// MainContent.tsx
import {FC} from 'react';
import MainContentProps from '../../models/types/props/components/MainContentProps';

import Section from '../Section';
import BoxColor from '../BoxColor';

import Button from '@mui/material/Button';
import TuneIcon from '@mui/icons-material/Tune';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import IconButton from '@mui/material/IconButton';

import {strings} from './strings';

const MainContent: FC<MainContentProps> = ({
  isLoading,
  imageOrigin,
  input,
  openFileSelector,
  applyFilter,
  isApply,
  editedImageSrc,
  handleDownload,
}) => {
  return (
    <main className="main">
      <Section
        title={strings.section.fistSectionTitle}
        isImage={isLoading}
        imageSrc={imageOrigin || ''}
      >
        <div className="section-panel-item section-item-border ">
          {input}
          <IconButton
            onClick={openFileSelector}
            color="primary"
            aria-label={strings.description.uploadDescription}
          >
            <UploadIcon />
          </IconButton>
        </div>
        <div className="section-panel-item section-item-border ">
          <IconButton
            color="primary"
            aria-label={strings.description.settingDescription}
          >
            <TuneIcon />
          </IconButton>
        </div>
        <div className="section-panel-item-end">
          <Button
            onClick={applyFilter}
            style={{minWidth: '90px'}}
            variant="contained"
          >
            {strings.description.editDescription}
          </Button>
        </div>
      </Section>

      <Section
        title={strings.section.twoSectionTitle}
        isImage={isApply}
        imageSrc={editedImageSrc || ''}
      >
        <div className="section-panel-item section-item-border">
          <IconButton
            color="primary"
            aria-label={strings.description.settingColorDescription}
          >
            <ColorLensIcon />
          </IconButton>
        </div>
        <div className="section-panel-item">
          <BoxColor />
        </div>
        <div className="section-item-border section-panel-item-end">
          <IconButton
            onClick={handleDownload}
            color="primary"
            aria-label={strings.description.downloadDescription}
          >
            <DownloadIcon />
          </IconButton>
        </div>
      </Section>
    </main>
  );
};

export default MainContent;
