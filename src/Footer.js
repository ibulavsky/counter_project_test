import React from 'react';
import './App.css';
import settingsImg from './assets/SettingsUI.png'

const Footer = (props) => {

    return (
        <div className="footer">
            <span>Press</span>
            <span>
                <input className="inputFooter"
                       type='image'
                       src={settingsImg}
                       width="50"
                       onClick={() => props.onClick()}
                 alt='settings'/>
           </span>
            <span> to change mode</span>
        </div>
    );
};

export default Footer;

