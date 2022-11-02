import React from 'react'
import './register.styles.css'

const Register = () => {
  return (
    <div className='register-page'>
        <form action="">
            <input type="text" placeholder='Enter name on your voterid' />
            <input type="text" placeholder='Enter voterid' />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register;