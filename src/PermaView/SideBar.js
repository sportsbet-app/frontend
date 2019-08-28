import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="">
        NFL
      </a>

      <a className="menu-item" href="">
        MLB
      </a>

      <a className="menu-item" href="">
        NCAA
      </a>

      <a className="menu-item" href="">
        CFL
      </a>

      <a className="menu-item" href="">
        NBA
      </a>
    </Menu>
  );
};
