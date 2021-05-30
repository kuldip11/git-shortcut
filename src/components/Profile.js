import React from 'react';
import '../styles/profile.css';
import StorageIcon from '@material-ui/icons/Storage';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
const Profile = (props) => {
    return (
        <div className="profile-box">
            <img src={props.picUrl} 
                title={props.name} 
                style={{ borderRadius: '50%', 
                height:'70px',
                marginTop:'5px'
                }}
            />
            <h3>{props.name}</h3>
            <h4 >{props.bio}</h4>
            <hr/>
            <h5 ><StorageIcon style={{height:"15px"}}/> repositories {props.repoCount}</h5>
            <h5><SupervisorAccountIcon style={{height:"20px"}}/> followers {props.folw}</h5>
            <hr/>
            <h5><LocationOnIcon style={{height:"17px"}}/> location: {props.loc}</h5>
        </div>
    );
};

export default Profile;