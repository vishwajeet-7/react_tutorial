import React, { useState } from 'react'
import UserPage from './UserPage';
import Login from './Login';

const MainPage = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    
  if(isLoggedIn){
    return <UserPage/>
  }else{
    return <Login/>
  }


}

export default MainPage
