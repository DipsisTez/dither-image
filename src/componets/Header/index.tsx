import * as React from 'react';
import {Link} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

import {strings} from './strings';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <Link className="navbar-item" to="/">
          {strings.header.editor}
        </Link>
        <Link className="navbar-item" to="/about">
          {strings.header.about}
        </Link>
        <a className="navbar-item navbar-item-end" href="#GIT">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </header>
  );
};

export default Header;
