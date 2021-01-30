import React from 'react';
import './Home.css';
import Logo from '../../components/Logo/Logo'
import absurdillustration from '../../assets/absurd-illustration.png'
// import undraw_doctors_hwty1 from '../../assets/undraw_doctors_hwty1.svg'

const Home = () => {
            return (
                <>
                    <Logo/>
                        <img className="homepage-image" src={absurdillustration} width="850px" height="750px"></img>
                            <div className="homepage-quote">
                                A nation's greatness is measured by how it treats it's<br/> 
                                weakest members and as of right now America is failing<br/> 
                                horribly. Do not let your experiences go untold due to<br/>
                                fear. Make your voice heard by telling your story.<br/>
                            </div>
                            <a href="#" class="cta-button">RateMyMd</a>
                </>
            );
}

export default Home;