import React,{useState,useEffect,useContext} from 'react';
import Info from './Info';
import '../../styles/files.css';
import {infoContext} from '../../App';

const Repo = ({ repoUrl}) => {
    const [user, setUser, userDetails, setUserDetails, repoList, setRepoList]= useContext(infoContext);

    const repoHandler = () => {
        fetch(repoUrl)
            .then((res) => res.json())
            .then(res => {setRepoList(res)})
            .catch(err =>console.log(err))
    }

    useEffect( ()=>{
        if(user!=="" ){
            repoHandler();
        }
      },[user])
    
    return (
        <div className="discription">
            <div className="data-box" >
                {repoList.length>0 && repoList.map((ele,idx) => (
                    <Info key = {idx}
                        repoName = { ele.name } 
                        url = { ele.html_url }
                        dis = { ele.description }
                        lang = { ele.language }
                    /> 
                ))}
            </div>
        </div>
    );
};

export default Repo;