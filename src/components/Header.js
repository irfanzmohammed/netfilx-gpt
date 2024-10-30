import React from 'react'
import { auth} from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser,removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import {toggleGptSearchView} from '../utils/GptSlice'
import {SUPPORTED_LANGUAGES} from '../utils/constants'
import {changeLanguage} from '../utils/configSlice'

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location = useLocation(); 
  const user=useSelector((store)=>store.user)
  const showGPTSearch=useSelector((store)=>store.gpt.showGPTSearch)

  const handleGPTSearch=()=>{
    dispatch(toggleGptSearchView());
  }

  const handleLangChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
     
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName}= user;
          dispatch(addUser({uid:uid,email,displayName}));
          //if (location.pathname === "/" || location.pathname === "/signin" || location.pathname === "/signup") {
            navigate("/browse");
          //}
  
          } else {
          // User is signed out
          dispatch(removeUser());
          //if (location.pathname !== "/") {
            navigate("/"); 
          //}  
        }

        
      });
      return ()=>unsubscribe();
  },[]);
  const hideUserControls = location.pathname === "/" ;
  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44"
         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="logo"/>"
       {user&& !hideUserControls && (
        <div className="flex p-2">
          {showGPTSearch&& <select className="p-2 m-2 bg-gray-900 text-white rounded-lg " 
          onChange={handleLangChange}>
          {SUPPORTED_LANGUAGES.map((lang)=>(
            <option key={lang.identifier} value={lang.name}>
              {lang.name}
            </option>
          ))}
          </select>}
          <button className=" px-4 mx-4 my-2 rounded-lg text-white bg-indigo-800" onClick={handleGPTSearch}>
           {showGPTSearch ?"Home Page":"Gpt Search"}
          </button>
          <img className="w-12 h-12"
          alt="usericon" src="https://occ-0-2086-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"/>
          <button onClick={handleSignOut}className="font-bold text-white">(Sign Out)</button>
        </div>)}
    </div>
  )
}
export default Header

