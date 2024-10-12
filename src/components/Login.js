import React, { useState } from 'react'
import Header from './Header'
import { useRef } from 'react';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  

  const[isSignInform,setSignInform]=useState(true);
  const[errormessage,seterrormessage]=useState(null);

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);


  const handleButtonClick=()=>{

    console.log(email.current.value)
    console.log(password.current.value)

    const message=checkValidData(email.current.value, password.current.value);
    seterrormessage(message);

    if(message)return;

    if(!isSignInform){
      
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName:name.current.value
    })
    .then(() => {
      const {uid,email,displayName}= auth.currentUser;
      dispatch(addUser({uid:uid,email,displayName}));
      navigate("/browse");
     
    }).catch((error) => {
      seterrormessage(error.message);
    });
    
  })
  
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrormessage(errorCode+ "-" +errorMessage);
      });
    

    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse");
 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+ "-" +errorMessage);
  });
    }
  }

  const handleToggleSignIn=()=>{
    setSignInform(!isSignInform);
  }


  return ( 
    <div>
       <Header/>
       <div className="absolute top-0 left-0 w-full h-full" >
       <img className="w-full h-full object-cover"
       src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"/>
       {/* https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg */}
       </div>
       <form onSubmit={(e)=>e.preventDefault()}
       className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80">

       <h1 className="font-bold text-3xl py-4">
       {isSignInform?"Sign In":"Sign Up"}
       </h1>
      
       {!isSignInform &&(
         <input ref={name}
         type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
       )}

        <input ref={email}
         type="text" placeholder="Email or mobile number" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
        <input ref={password}
        type="text" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>

        <p className="text-red-500 text-lg py-2">{errormessage}</p>

        <button className="bg-red-700 p-4 my-6 w-full rounded-lg"
        onClick={handleButtonClick}> 

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