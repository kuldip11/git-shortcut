import { NoEncryption } from '@material-ui/icons';
import React from 'react';
import '../styles/info.css'
const Info = (props) => {
    return (
        <div className="card">
            <a href={props.url} style={{textDecoration:"none", color:"black",marginBottom:"1px"}}>{props.repoName}</a>
            {props.dis!==null && <h5>{props.dis}</h5>}
            {props.lang!==null && <h4>language: {props.lang}</h4>}
        </div>
    );
};

export default Info;