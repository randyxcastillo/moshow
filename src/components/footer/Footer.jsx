import React from 'react';

import './footer.scss';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/moshow-logo.png';
import TMDBlogo from '../../assets/TMDB-logo.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className='copyright-text'>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <p>© 2022</p>
                </div>
                <div className='atribution-logo'>
                    <p>Powered by</p>
                    <img src={TMDBlogo} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;