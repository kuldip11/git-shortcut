import React,{useState} from 'react';
import '../styles/header.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Height } from '@material-ui/icons';
import UserPicture from './UserPicture';

const Header =(props) => {
    const [state,setState]=React.useState("");
    const  urlHandler = () => {
        fetch(`https://api.github.com/users/${state}`)
        .then((res) => res.json())
        .then((res) => props.detailsHandler(res))
        .then(() => props.userHandler(state))
        .catch((err) => console.log(err))
        
    }
    return (
        <div className = "header-container">
            <GitHubIcon style = {{ height : '100%', marginLeft : '20px'}} />
            <input className = "repo" onChange = {(e) => { setState(e.target.value) }} />
            <button type = "submit" name = "Submit" onClick = {urlHandler} >Search</button>
            {props.details !== "" &&  
                <div>
                    <a className="name" href = { props.details.html_url } > {props.details.login} </a>  
                    <UserPicture name = { props.details.name } avatar_url = { props.details.avatar_url } />
                </div>
            }
        </div>
    );

};

export default Header;