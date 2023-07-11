import * as React from 'react';
import SectionTitleProps from '../../../../models/types/props/components/SectionTitleProps';

import './style.css';

const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
  return (
    <div className="section-title">
      <h3>{title}</h3>
    </div>
  );
};

export default SectionTitle;
