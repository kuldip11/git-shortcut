import React from 'react';
import '../../styles/footer.css';
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
const Footer = () => {
    return (
        <div className="footer">
            <div className="bar" style={{color:"white"}}>
                Developed by Bhookad Tech😋|
                <a href="https://github.com/kuldip11">
                    <GithubFilled  style = {{color:"white",marginLeft : '5px', marginTop : '10px'}} />
                </a> |
                <a href="https://www.linkedin.com/in/kuldip-kumar-b90092188/">
                    <LinkedinFilled   style = {{color:"white",marginLeft : '5px', marginTop : '10px'}} />
                </a>

            </div>
        </div>
    );
};

export default Footer;