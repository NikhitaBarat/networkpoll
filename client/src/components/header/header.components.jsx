/* eslint no-use-before-define: 0 */
// import React, { useState, useEffect, useContext } from 'react';
import { useState } from 'react';
import './header.styles.css';
// import { Web3Context } from '../../context/web3Context';

const Header = () => {
  const [ account, setAccount ] = useState();
  let connected = false;
  let installed = false;
  
  const connect = async () => {
    if (typeof window.ethereum !== 'undefined'){
      console.log('MetaMask is installed!');
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      console.log(account)
    }
  }
  const isMetaMaskInstalled = () => {
    return Boolean(window.ethereum && window.ethereum.isMetaMask);
  }
  const isMetaMaskConnected = async () => {
    const {ethereum} = window;
    const accounts = await ethereum.request({method: 'eth_accounts'});
    return accounts && accounts.length > 0;
  }
  const initialize = async () => {
    connected = await isMetaMaskConnected();
    installed = isMetaMaskInstalled();
    if(connected){
      // do something
    }
    if (installed) {
      // do something
    }
  }

  const isConnected = () => {
    window.ethereum.on('accoutsChanged', async () => {
      initialize();
    })
    // after disconnection page reloads
    window.location.reload();
  }

  return (
    <header>
      <div className="left"></div>
      <div className="center">

      </div>
      <div className="right">
      { 
          account ? 
          <div>
            {account}
            <button className='wallet-btn' onClick={isConnected}>Disconnect</button>
          </div> :
           <button className='wallet-btn' onClick={connect}>Connect Wallet</button>

      }
      </div>
    </header>
  )
}

export default Header;