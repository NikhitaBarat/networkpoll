import React from 'react';
// import { useContext } from 'react';
import { CandidateCard } from '../../components';
// import { MyContractContext } from '../../context/contractContext';
import './home.styles.css';

const Home = () => {
  // const MyContract = useContext(MyContractContext)

  
  // useEffect(() => {
  //   MyContract
  //     ?.deployed()
  //     ?.then(async function(instance) {
  //       // Do something with instance...
  //     })
  //     ?.catch(e => {
  //       // Failed to load web3, accounts, or contract. Check console for details.
  //       // console.error(e);
  //     });
  // },);
  return (
    <div className='home-page'>
        <CandidateCard />
    </div>
  )
}

export default Home