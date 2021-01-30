import React from 'react'
import './Logo.css'
// import { ReactSVG } from 'react-svg'
import ratemymd from '../../assets/ratemymd.com.svg'


const Logo = () => {
        return (
            <>
                <a href="/" className="logo">
                    {/* <div className="logo-top">Ratemymd</div>
                    <span className="logo-symbol"></span>
                    <span className="logo-bottom">com</span> */}
                    <img src={ratemymd} className="logo" alt="Logo of Rate My Md.com">
                    </img>
                </a>
            </>
        );
}

export default Logo;
