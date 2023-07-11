import * as React from 'react';

import {strings} from './strings';
import './style.css';

const About = () => {
  return (
    <div className="Box">
      <h2 className="Title">{strings.aboutDescription}</h2>
      <p className="Description">{strings.distDescription}</p>
    </div>
  );
};

export default About;
