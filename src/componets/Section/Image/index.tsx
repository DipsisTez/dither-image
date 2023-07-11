import * as React from 'react';
import SectionImageProps from '../../../models/types/props/components/SectionImageProps';
import WallpaperIcon from '@mui/icons-material/Wallpaper';

import {strings} from './strings';
import './style.css';

const SectionImage: React.FC<SectionImageProps> = ({isImage, imageSrc}) => {
  return (
    <div className="section-image">
      {isImage ? (
        <img src={imageSrc} alt="Section image" />
      ) : (
        <>
          <WallpaperIcon fontSize="large" />
          <p>{strings.previewDescription}</p>
        </>
      )}
    </div>
  );
};

export default SectionImage;
