// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Container from './components/container/Container'
import Footer from './components/footer/Footer';
import React, { useState, createContext } from 'react';
export const infoContext=createContext([]);
// import './svg/welcome.svg'

const App = () => {
  const [ user, setUser ] = useState("");
  const [ userDetails, setUserDetails ] = useState("");
  const [ repoList, setRepoList ] = useState("");


  return (
    <div className="App">
      <infoContext.Provider value = {[user, setUser, userDetails, setUserDetails, repoList, setRepoList]} >
        <Header/>
        <div style={{height:"83vh"}}>
        {/* { user === "" && <Container /> } */}
          { user !== "" && <Container /> }
        </div>
        <Footer className="footer"/>
      </infoContext.Provider>
    </div>
  );
}
export default App;