import React from 'react'
import './Logo.css'
// import { ReactSVG } from 'react-svg'
import ratemymd from '../../assets/ratemymd.com.svg'


const Logo = () => {
        return (
            <>
                <a href="/">
                    <img src={ratemymd} className="logo" alt="Logo of Rate My Md.com">
                    </img>
                </a>
            </>
        );
}

export default Logo;
