import React from 'react';
import style from "./histotyBlock.module.css";
import bibleIcon from "../../assets/images/bibleIcon.png";
import firstImage from "../../assets/images/image6.png";
import Tilt from 'react-parallax-tilt'


const HistoryBlock = () => {
    const firstImg = {
        backgroundImage: `url(${firstImage})`
    }
    const bible = {
        backgroundImage: `url(${bibleIcon})`
    }
    return (
        <div className={style.historyBlock} id={'history'}>
            <div className={style.descriptionBlock}>
                <h2>Предыстория</h2>
                <p className={style.title}>Весь мир лежит во зле. </p>
                <p>
                    Войны, болезни и смерть... то что пугает нас сегодня, это не что-то новое. От начала
                    времен <b>грех </b>
                    разрушает человеческие жизни, общества и государства.
                </p>
                <p className={style.descriptionItem}>
                    <i>
                        “Нет праведного ни одного”
                    </i>
                    <div className={style.biblePlaces}>
                        <div className={style.bibleIcon} style={bible}/>
                        <p>Римлянам 3:10</p>
                    </div>

                </p>
            </div>
            <Tilt>
                <div className={style.imageBlock} style={firstImg}/>
            </Tilt>
        </div>
    );
};

export default HistoryBlock;
