import React from 'react';
import '../../styles/footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
const Footer = () => {
    return (
        <div className="footer">
            <div className="bar" style={{color:"white"}}>
            Developed by Bhookad Tech😋|<a href="https://github.com/kuldip11"><GitHubIcon style = {{color:"white",marginLeft : '5px', marginTop : '5px'}} /></a>
            </div>
        </div>
    );
};

export default Footer;