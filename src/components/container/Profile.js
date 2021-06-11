import React, { useContext } from 'react';
import '../../styles/profile.css';
import StorageIcon from '@material-ui/icons/Storage';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {infoContext} from '../../App';

const Profile = () => {
    const [ user, setUser, userDetails ]= useContext(infoContext);
    return (
        <div className="profile-box">
            <img src={userDetails.avatar_url} 
                title={user} 
                style={{ borderRadius: '50%', 
                height:'70px',
                marginTop:'5px'
                }}
            />
            <>
                <h3>{userDetails.name}</h3>
                <h4 >{userDetails.bio}</h4>
            </>
            <hr/>
            <>
                <h5 ><StorageIcon style={{height:"15px"}}/> Repositories {userDetails.public_repos}</h5>
                <h5><SupervisorAccountIcon style={{height:"20px"}}/> Followers {userDetails.followers}</h5>
            </>
            <hr/>
            <h5><LocationOnIcon style={{height:"17px"}}/> Location: {userDetails.location}</h5>
        </div>
    );
};

export default Profile;