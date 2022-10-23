/* eslint no-use-before-define: 0 */
// import React, { useState, useEffect, useContext } from 'react';
import './header.styles.css';
// import { Web3Context } from '../../context/web3Context';

const Header = () => {


  return (
    <header>
      <div className="left"></div>
      <div className="center"></div>
      <div className="right">
        <button>Connect Wallet</button>
      </div>
    </header>
  )
}

export default Header;