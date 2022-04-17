import React from 'react';
import style from './prequel.module.css'
import firstImage from "../assets/images/image6.png";

const Prequel = () => {
    const firstImg = {
        backgroundImage: `url(${firstImage})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={style.historyBlock}>
                <div className={style.descriptionBlock}>
                    <h2>Предыстория</h2>
                    <p className={style.title}>Весь мир лежит во зле. </p>
                    <p>
                        Войны, болезни и смерть... то что пугает нас сегодня, это не что-то новое. От начала
                        времен <b>грех </b>
                        разрушает человеческие жизни, общества и государства.
                    </p>
                    <p>
                        <i>
                            “Нет праведного ни одного”
                        </i>
                    </p>
                </div>
                <div className={style.imageBlock} style={firstImg}/>

            </div>

        </div>
    );
};

export default Prequel;
