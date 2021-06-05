import React,{useState,useEffect,useContext} from 'react';
import Info from './Info';
import '../../styles/files.css';
import {infoContext} from '../../App';
import repoHandler from '../../url/repoApi';

const Repo = ({ repoUrl}) => {
    const [user, setUser, userDetails, setUserDetails, repoList, setRepoList]= useContext(infoContext);

    useEffect( ()=>{
        if(user!=="" ){
            repoHandler(repoUrl,setRepoList);
        }
      },[user])
    
    return (
        <div className="discription">
            <div className="data-box" >
                {repoList.length>0 && repoList.map((ele) => (
                    <Info repoName = { ele.name } 
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