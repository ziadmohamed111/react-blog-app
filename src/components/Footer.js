import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => (
    <div className="footer">
        <div className="container">
            <div className="footer__container">
                <h3>Zee</h3>
                <p>&copy; 2019 Zee. All Rights Reserved</p>
            </div>
            <div className="footer__aside">
            <a href="https://www.facebook.com/ziad.mohamed.501151"><FacebookIcon/></a>
            <a href="https://twitter.com/___ZOX "><TwitterIcon/></a>
            <a href="https://www.instagram.com/x._zeyad_.x/"><InstagramIcon/></a>
                
                
                
            </div>
        </div>
    </div>
)

export default Footer