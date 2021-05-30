import React, { useState } from 'react';
import Profile from './Profile';
import '../styles/container.css'
import Files from './Files';
const Container = (props) => {
    const [repoList,setRepoList]=useState("");
    return (
        <div className="display">
            <Profile  name = {props.details.name}
                location={props.details.location}
                bio={props.details.bio}
                repoCount={props.details.public_repos} 
                picUrl={props.details.avatar_url}
                loc={props.details.location}
                folw={props.details.followers}
            />

            <Files repoUrl={props.details.repos_url}/>



        </div>
    );
};

export default Container;