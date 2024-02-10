import React, { useState } from 'react'
import Header from './Header'
import NETFLIX_TRIFECTA_BGC from '../images/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg'

const Login = () => {
  debugger
  const [isSignIn, setIsSignIn] = useState(true)
  const handleSignInSignUpToggle = (e,flagVal) => {
    setIsSignIn(flagVal)
    e.preventDefault()
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={NETFLIX_TRIFECTA_BGC} alt="" />
      </div>
      <form className='w-3/12 
                       my-44 
                       mx-auto right-0 left-0 
                       absolute 
                       p-12
                     bg-black bg-opacity-80 text-white 
                       flex flex-col items-baseline
                       rounded-lg'>
        <h1 className='font-bold text-3xl py-0'>
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
      {!isSignIn && <input type="text"
          placeholder='Full Name'
          className='p-4 my-4 w-full bg-black bg-opacity-55'
        />}
        <input type="text"
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-black bg-opacity-55'
        />
        <input type="password"
          placeholder='*******'
          className='p-4 my-4 w-full bg-black bg-opacity-55'
        />
        <button className='p-4 my-6 bg-red-700 w-full'>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn
          ?
          <button onClick={(e)=>handleSignInSignUpToggle(e,false)}>New to Netflix? <b>Sign up now.</b></button>
          : <button onClick={(e)=>handleSignInSignUpToggle(e,true)}>Already have an Acount? <b>Sign in now.</b></button>
        }
      </form>
    </div>
  )
}

export default Login