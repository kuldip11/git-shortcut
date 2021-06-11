import welcome from './svg/welcome.svg';
import './App.css';
import Header from './components/header/Header';
import Container from './components/container/Container'
import Footer from './components/footer/Footer';
import React, { useState, createContext, useEffect } from 'react';
export const infoContext=createContext([]);

const App = () => {
  const [ user, setUser ] = useState("");
  const [ userDetails, setUserDetails ] = useState("");
  const [ repoList, setRepoList ] = useState("");

  return (
    <div className="App">
      <infoContext.Provider value = {[user, setUser, userDetails, setUserDetails, repoList, setRepoList]} >
        <Header/>
        <div style={{height:"83vh"}}>
        { user === "" && 
          <div style={{display:"flex",alignContent:"center",justifyContent:"center",height:"30vh",marginTop:"20vh"}}> 
            <img src = {welcome} alt="Welcome user!!"/>
          </div> }

        { user !== "" && <Container /> }
        </div>
        <Footer className="footer"/>
      </infoContext.Provider>
    </div>
  );
}
export default App;