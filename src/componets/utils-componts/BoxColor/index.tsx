import * as React from 'react';

import './style.css';

const BoxColor = () => {
  return (
    <div className="selected-colors">
      <div className="Color-item Color-red"></div>
      <div className="Color-item Color-item-next Color-blue"></div>
      <div className="Color-item Color-item-next Color-black"></div>
      <div className="Color-item Color-item-next Color-white Color-item-end"></div>
    </div>
  );
};

export default BoxColor;
