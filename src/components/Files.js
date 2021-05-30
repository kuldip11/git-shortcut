import React,{useState,useEffect} from 'react';
import Info from './Info';
import '../styles/files.css';
const Files = ({repoUrl}) => {
    const [details,setDetails]=useState([]);
    const [flag,setFlag]=useState(false);
    const changeHandler= async ()=>{
        // setFlag(true)
          await fetch(repoUrl)
           .then((res) => res.json())
           .then(res => {setDetails(res)})
           .catch(err =>console.log(err))

        }
    
    return (
        <div className="discription">
            <div className="btn">
                <button disabled={flag} onClick={changeHandler}>repository</button>
                <button >issues</button>
                <button >pull request</button>
            </div>
            <div className="data-box">
                {details.length>0 && details.map((ele,idx) => (
                    <Info repoName={ele.name} 
                        url={ele.html_url}
                        dis={ele.description}
                        lang={ele.language}
                    /> 
                ))}
                
            </div>
        </div>

    );
};

export default Files;