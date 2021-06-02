import React, { useContext } from 'react';
import Profile from './Profile';
import '../styles/container.css'
import Files from './Repo';
import {infoContext} from '../App';
import DetailsRouter from './DetailsRouter';

const Container = () => {
    const [user,setUser,userDetails,setUserDetails,page]= useContext(infoContext);
    return (
        <div className="display">
            <Profile />
            <DetailsRouter repoUrl={userDetails.repos_url}/>
            
        </div>
    );
};

export default Container;