// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/Container'
import React, {useState,useEffect} from 'react';
function App() {
  const [user,setUser]=useState("");
  const [userDetails,setUserDetails]=useState("");

  const userHandler=(name)=>{
    setUser(...name)
  }
  const detailsHandler=(details)=>{
    setUserDetails(details)
  }
  // useEffect(()=>{console.log(user,"+",userDetails)},[user,userDetails])

  return (
    <div className="App">
      <Header details={userDetails} userHandler={userHandler} detailsHandler={detailsHandler}/>

      {user!=="" && <Container details={userDetails}/>}
     
     {/* <Footer/> */}
    </div>
  )
}

export default App;
