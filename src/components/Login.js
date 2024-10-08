import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInform,setSignInform]=useState(true);

  const handleToggleSignIn=()=>{
    setSignInform(!isSignInform);
  }


  return ( 
    <div>
       <Header/>
       <div className="absolute" >
       <img 
       src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"/>
       </div>
       <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80">

       <h1 className="font-bold text-3xl py-4">
       {isSignInform?"Sign In":"Sign Up"}
       </h1>
      
       {!isSignInform &&(
         <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
       )}

        <input type="text" placeholder="Email or mobile number" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
        <input type="text" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>

        <button className="bg-red-700 p-4 my-6 w-full rounded-lg"> 
        {isSignInform?"Sign In":"Sign Up"}</button>

        <p className="py-4 cursor-pointer" onClick={handleToggleSignIn}>
          {isSignInform ?"New to Netflix? Sign Up Now"
          :"Already registered? Sign In Now"}
        </p>
       </form>

    </div>
    
    
  )
}

export default Login