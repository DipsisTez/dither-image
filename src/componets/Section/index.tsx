import * as React from 'react';
import SectionProps from '../../models/types/props/components/SectionProps';

import SectionTitle from './Title/index';
import SectionImage from './Image/index';
import SectionPanel from './Panel/index';

import './style.css';

const Section: React.FC<SectionProps> = ({
  title,
  isImage,
  imageSrc,
  children,
}) => {
  return (
    <div className="section">
      <SectionTitle title={title} />
      <SectionImage isImage={isImage} imageSrc={imageSrc} />
      <SectionPanel>{children}</SectionPanel>
    </div>
  );
};

export default Section;
