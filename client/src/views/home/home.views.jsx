
import React from 'react';
import { CandidateCard } from '../../components';
// import WalletConnectProvider from "@maticnetwork/walletconnect-provider"
// import Web3 from "web3"
// import Matic from "maticjs"
// import { MyContractContext } from '../../context/contractContext';
import './home.styles.css';

// const maticProvider = new WalletConnectProvider(
//   {
//     host: `https://rpc-mumbai.matic.today`,
//     callbacks: {
//       onConnect: console.log('connected'),
//       onDisconnect: console.log('disconnected!')
//     }
//   }
// )
// const maticWeb3 = new Web3(maticProvider)

const Home = () => {


  return (
    <div className='home-page'>
        <CandidateCard />

    </div>
  )
}

export default Home