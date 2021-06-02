import React,{useState,useEffect,useContext} from 'react';
import '../styles/files.css';
import {infoContext} from '../App';
import '../styles/files.css'
let myStatus
const Issues = () => {
    const [user, setUser, userDetails, setUserDetails, repoList, setRepoList]= useContext(infoContext);
    const[state,setState]=useState("");
    const[result,setResult]=useState([]);
    const issueHandler= async (val)=>{
        if(val!==""){
            fetch(`https://api.github.com/repos/${user}/${val}/issues`)
            .then((res) => res.json())
            .then((res)=>setResult(res))
            .then((res)=>setState(val))
            .then(()=>console.log(result,"=",state,"=",myStatus))
            .then(()=>result.map(ele=>console.log(ele.url)))
            .catch((err) =>alert(err.message))
            fetch(`https://api.github.com/repos/${user}/${val}/issues`)
            .then(res=>myStatus=res.status)
        }
        else{
            alert("Invalid use name!!");
        }   
        
    }
    
      return (
        <div className="discription">
            <input  onKeyDown={(e)=>{if(e.key==="Enter"){setState(e.target.value);issueHandler(e.target.value)}}} style={{border:"2px solid black"}}/>
            <div className="data-box">
                {myStatus===404 && <h3>No repositories found!</h3>}
                {myStatus===200 && result.map(ele=>{
                    <div className="card">
                        <a href={ele.user.html_url} style={{textDecoration:"none", color:"black",marginBottom:"1px"}}>{ele.titlel}</a>
                        <h5>created_at: {ele.created_at}</h5>
                        <h4>state: {ele.state}</h4>
                    // </div>
                })}
            </div>
        </div>
    );
};


export default Issues;