import React from 'react';
import style from "./JesusBornBlock.module.css";
import bibleIcon from "../../assets/images/bibleIcon.png";
import jesusBorn from "../../assets/images/JesusBorn.png";

const JesusBornBlock = () => {
    const firstImg = {
        backgroundImage: `url(${jesusBorn})`
    }
    const bible = {
        backgroundImage: `url(${bibleIcon})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={style.imageBlock} style={firstImg}/>
            <div className={style.descriptionBlock}>
                <h2>Иисус родился</h2>
                <p>
                    Философы и умнейшие люди на протяжении столетий пытались найти решение, придумать систему и
                    построить общество, в котором бы не было зла. Но зло всегда внутри нас, оно - часть нашей грешной
                    природы. Спасение могло прийти только извне.
                </p>
                <p className={style.itemBlock}>Иисус, Сын Божий, родился на земле, чтобы <b>принести нам спасение и
                    победу </b>
                    над грехом.</p>
                <p className={style.descriptionItem}>
                    <i>
                        “ибо ныне родился вам в городе Давидовом Спаситель, Который есть Христос Господь ”
                    </i>
                    <div className={style.biblePlaces}>
                        <div className={style.bibleIcon} style={bible}/>
                        <p>Луки 2:11</p>
                    </div>

                </p>
            </div>

        </div>
);
};

export default JesusBornBlock;
