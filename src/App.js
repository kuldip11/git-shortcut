// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/Container'
import React, { useState, createContext } from 'react';
export const infoContext=createContext([]);

const App = () => {
  const [ user, setUser ] = useState("");
  const [ userDetails, setUserDetails ] = useState("");
  const [ repoList, setRepoList ] = useState("");


  return (
    <div className="App">
      <infoContext.Provider value = {[user, setUser, userDetails, setUserDetails, repoList, setRepoList]} >
        <Header/>
        { user !== "" && <Container /> }
        {/* <Footer/> */}
      </infoContext.Provider>
    </div>
  );
}
export default App;