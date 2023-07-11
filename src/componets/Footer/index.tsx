import * as React from 'react';

import {strings} from './strings';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-tag">
        <p className="footer-text">{strings.footer.createdBy}</p>
      </div>
    </footer>
  );
};

export default Footer;
