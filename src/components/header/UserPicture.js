import React from 'react';

const UserPicture = (props) => {
    return (
        <div>
            <img src={props.avatar_url} title={props.name} style={{ borderRadius: '50%', height:'35px',position:'absolute',right:'10px',top:'20px'}}/>
        </div>
    );
};

export default UserPicture;