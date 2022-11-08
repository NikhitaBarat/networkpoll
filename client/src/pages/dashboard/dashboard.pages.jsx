import React from 'react';
import { useState } from 'react';
import { CandidateCard } from '../../components';

const Dashboard = () => {
  const [jwt, setJWT] = useState()
  let response = fetch('http://localhost:4000/jwt')
  response.then((res) => {
    // console.log(res)
    return res.json()
  })
  .then((resp) => {
    console.log(resp)
    setJWT(resp.token)
  })

  let secretResponse = fetch('http://localhost:4000/secret', {  
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  })
  secretResponse.then((res) => {
    // console.log(res)
    return res.json()
  })
  .then((resp) => {
    console.log(resp)
  })

  return (
    <div className='voting-window'>
      <CandidateCard/>
    </div>
  )
}

export default Dashboard