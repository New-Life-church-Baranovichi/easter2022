import React from 'react';
import style from './prequel.module.css'
import HistoryBlock from "./historyBlock/HistoryBlock";
import JesusBornBlock from "./JesusBornBlock/JesusBornBlock";
import JesusLifeBlock from "./JesusLife/JesusLifeBlock";
import JesusDieBlock from "./JesusDie/JesusDieBlock";
import SundayBlock from "./Sunday/SundayBlock";

const Prequel = () => {

    return (
        <div className={style.mainBlock}>
            <div className={style.historyContainer}>
                <HistoryBlock/>
                <JesusBornBlock/>
                <JesusLifeBlock/>
                <JesusDieBlock/>
                <SundayBlock/>
            </div>

        </div>
    );
};

export default Prequel;
