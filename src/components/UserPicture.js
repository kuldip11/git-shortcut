import React from 'react';

const UserPicture = (props) => {
    return (
        <div>
            <img src={props.avatar_url} title={props.name} style={{ borderRadius: '50%', height:'70px',position:'absolute',right:'10px',top:'10px'}}/>
        </div>
    );
};

export default UserPicture;