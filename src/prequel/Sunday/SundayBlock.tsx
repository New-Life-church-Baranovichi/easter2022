import React from 'react';
import style from "./sunday.module.css";
import bibleIcon from "../../assets/images/bibleIcon.png";
import sunday from "../../assets/images/sunday.png";
import Tilt from 'react-parallax-tilt'

const SundayBlock = () => {
    const firstImg = {
        backgroundImage: `url(${sunday})`
    }
    const bible = {
        backgroundImage: `url(${bibleIcon})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={style.descriptionBlock}>
                <h2>
                    Иисус воскрес
                </h2>
                <p>
                    Приняв на себя наши грехи и умерев за нас, на третий день Он воскрес. Это начало новой эпохи,
                    возможность для каждого человека получить прощение, изменить свою жизнь. Цена за твой грех уже
                    уплачена, осталось только принять это.
                </p>
                <p className={style.descriptionItem}>
                    <i>
                        “Бог, воскресив Сына Своего Иисуса, к вам первым послал Его благословить вас, отвращая каждого
                        от злых дел ваших.”
                    </i>
                    <div className={style.biblePlaces}>
                        <div className={style.bibleIcon} style={bible}/>
                        <p>Деяния 3:26</p>
                    </div>

                </p>
            </div>
            <Tilt>
                <div className={style.imageBlock} style={firstImg}/>
            </Tilt>



        </div>
    );
};

export default SundayBlock;
