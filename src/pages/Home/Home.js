import React from 'react';
import './Home.css';
import Logo from '../../components/Logo/Logo'
import Card from '../../components/Card/Card'
import undraw_doctors_hwty1 from '../../assets/undraw_doctors_hwty1.svg'

const Home = () => {
            return (
                <>
                    {/* <Card></Card> */}
                    <Logo/>
                    <img className="home-image" src={undraw_doctors_hwty1} alt=""></img>
                    <a href="#" class="cta-button">Rate My Md</a>

                    
                </>
            );
}

export default Home;