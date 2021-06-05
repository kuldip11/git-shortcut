import React,{useState,useEffect,useContext} from 'react';
import '../../styles/files.css';
import {infoContext} from '../../App';
import '../../styles/files.css'
let myStatus
const Issues = () => {
    const [user, setUser, userDetails, setUserDetails, repoList, setRepoList]= useContext(infoContext);
    const[state,setState]=useState("");
    const[result,setResult]=useState([]);
    const issueHandler= async (val)=>{
        if(val!==""){
            fetch(`https://api.github.com/repos/${user}/${val}/issues`)
            .then((res) => res.json())
            .then((res)=>{myStatus=200;console.log(res); setResult(res)})
            .then(()=>setState(val))
            .then(()=>console.log(result,"=",state,"=",myStatus))
            .catch((err) =>{myStatus=404;alert(err.message)})
        }
        else{
            alert("Invalid use name!!");
        }   
    }
    
      return (
        <div className="discription">
            
            <div className="data-box">
                <input  onKeyDown={(e)=>{if(e.key==="Enter"){setState(e.target.value);issueHandler(e.target.value)}}} 
                        style={{border:"2px solid black"}}
                        placeholder="Enter repository name"
                    />
                <hr/>
                {myStatus===404 && <h3>No repositories found!</h3>}
                {myStatus===200 && result.map(ele=>(
                    <div className="card">
                        <a href={ele.html_url} style={{textDecoration:"none", color:"black",marginBottom:"1px"}}>{ele.title}</a>
                        <h5>created_at: {ele.created_at}</h5>
                        <h4>state: {ele.state}</h4>
                    </div>
                ))}
                
                    
            </div>
        </div>
    );
};


export default Issues;