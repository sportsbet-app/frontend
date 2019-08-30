import React from 'react';
import Search from "../Components/Search";
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <div>


      <Menu>

        <Search />

        <a className="menu-item" href="/">
          Live Betting
      </a>

        <a className="menu-item" href="/">
          Upcoming
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

        <a className="menu-item" href="https://www.vegas.com/gaming/gaming-tips/sports-betting/">
          Rules and How to bet
      </a>

        <a className="menu-item" href="">
          NBA
      </a>

        <a className="menu-item" href="">
          NBA
      </a>
      </Menu>
    </div>
  );
};
