import React from 'react';
import style from "./JesusLife.module.css";
import bibleIcon from "../../assets/images/bibleIcon.png";
import jesusLife from "../../assets/images/JesusLife.png";
import Tilt from 'react-parallax-tilt'

const JesusLifeBlock = () => {
    const firstImg = {
        backgroundImage: `url(${jesusLife})`
    }
    const bible = {
        backgroundImage: `url(${bibleIcon})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={style.descriptionBlock}>
                <h2>
                    Иисус жил
                </h2>
                <p>
                    За 33 года своей земной жизни, Иисус совершил множество чудес: исцелял больных, воскрешал мертвых.
                    Но
                    главное, Он столкнулся с теми же трудностями, что и мы, показал нам путь к Богу, показал, какой
                    должна быть наша жизнь, наши отношения, и какими нас хочет видеть Бог.
                </p>
                <p className={style.descriptionItem}>
                    <i>
                        “подобно нам, искушен во всем, кроме греха ”
                    </i>
                    <div className={style.biblePlaces}>
                        <div className={style.bibleIcon} style={bible}/>
                        <p>Евреям 4:15</p>
                    </div>

                </p>
            </div>
            <Tilt>
                <div className={style.imageBlock} style={firstImg}/>
            </Tilt>


        </div>
    );
};

export default JesusLifeBlock;
