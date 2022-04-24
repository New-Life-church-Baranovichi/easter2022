import React from 'react';
import style from './header.module.css'
import Navigation from "./navigation/Navigation";
import wreathImg from '../assets/images/wreathImg.png'
import Tilt from 'react-parallax-tilt'

const Header = () => {
    const wreath = {
        backgroundImage: `url(${wreathImg})`
    }
    return (
        <div className={style.mainBlock}>
            <Navigation/>
            <div className={style.easterBlock}>
                <p>Что все вокруг празднуют, и почему это важно.</p>
                <h5>ЧТО ТАКОЕ</h5>
                <div className={style.oriol1}/>
                <div className={style.wreathBlock} style={wreath}>
                    <Tilt>
                        <h1>ПАСХА</h1>
                    </Tilt>

                </div>
            </div>
        </div>
    );
};

export default Header;
