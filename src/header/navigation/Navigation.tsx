import React from 'react';
import style from './navigation.module.css'

const Navigation = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.link}>
                <a href="">история</a>
            </div>
            <div className={style.link}>
                <a href="">распятие</a>
            </div>
            <div className={style.link}>
                <a href="">значение</a>
            </div>
            <div className={style.link}>
                <a href="">контакты</a>
            </div>
        </div>
    );
};

export default Navigation;
