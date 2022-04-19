import React from 'react';
import style from './footer.module.css'
import churchImg from '../assets/images/churchImg.png'

const Footer = () => {
    const churchImage = {
        backgroundImage: `url(${churchImg})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                {/*<div className={style.circle}/>*/}
                <div className={style.imgBlock} style={churchImage}>
                    <h1>
                        Ждем тебя!
                    </h1>
                    <p>
                            ул. Вагонная, 6
                    </p>

                </div>
                <div className={style.verticalLine}/>
                <div className={style.textBlock}>
                    <div>
                        <p>
                           <b>Воскресенье</b>
                        </p>
                        <p className={style.numText}>
                            10:00, 17:00
                        </p>
                    </div>
                    <div className={style.wednesdayBlock}>
                        <p>
                            <b>
                                Среда
                            </b>
                        </p>
                        <p className={style.numText}>
                            19:00
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;
