import * as React from 'react';
import SectionPanelProps from '../../../../models/types/props/components/SectionPanelProps';

import './style.css';

const SectionPanel: React.FC<SectionPanelProps> = ({children}) => {
  return <div className="section-panel">{children}</div>;
};

export default SectionPanel;
