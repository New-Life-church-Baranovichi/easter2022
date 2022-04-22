import React from 'react';
import style from './evidences.module.css'
import PersonEvidence from "./personEvidence/PersonEvidence";


const Evidences = () => {
    return (
        <div className={style.mainBlock}>
            <PersonEvidence/>
        </div>
    );
};

export default Evidences;
