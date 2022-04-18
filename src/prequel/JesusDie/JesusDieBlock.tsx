import React from 'react';
import style from "./JesusDie.module.css";
import bibleIcon from "../../assets/images/bibleIcon.png";
import jesusDie from "../../assets/images/JesusDie.png";

const JesusDieBlock = () => {
    const firstImg = {
        backgroundImage: `url(${jesusDie})`
    }
    const bible = {
        backgroundImage: `url(${bibleIcon})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={style.imageBlock} style={firstImg}/>
            <div className={style.descriptionBlock}>
                <h2>
                    Иисус умер
                </h2>
                <p>
                    Бог абсолютно справедлив, и любой грех должен быть наказан. Наказание за грех - смерть. Но его
                    любовь
                    к нам еще больше, вместо нас наказание понес Иисус. Он умер за мои, за твои грехи. Приняв его
                    жертву, мы получаем прощение.
                </p>
                <p className={style.descriptionItem}>
                    <i>
                        “Ибо так возлюбил Бог мир, что отдал Сына Своего Единородного, дабы всякий, верующий в Него, не
                        погиб, но имел жизнь вечную”
                    </i>
                    <div className={style.biblePlaces}>
                        <div className={style.bibleIcon} style={bible}/>
                        <p>Иоанна 3:16</p>
                    </div>

                </p>
            </div>


        </div>
    );
};

export default JesusDieBlock;
