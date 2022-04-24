import React from 'react';
import style from "./persomEvidence.module.css";



type PersonEvidencePropsType = {
    name: string
    age: string
    topBlock: string
    mainBlock: string
    avatar: Object
}

const PersonEvidence: React.FC<PersonEvidencePropsType> = ({age, name, topBlock, mainBlock,avatar,}) => {

    return (

        <div className={style.mainContainer}>
            <div className={style.mainItem}>
                <div className={style.photoImg} style={avatar}/>
                <h2>{name}</h2>
                <div className={style.ageBlock}>
                    {age}
                </div>
                <div className={style.topBlock}>
                    {topBlock}
                </div>
                <div className={style.mainParagraph}>
                    {mainBlock}
                </div>
            </div>
        </div>
    );
};

export default PersonEvidence;
