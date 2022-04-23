import React from 'react';
import style from "./persomEvidence.module.css";
import IliaImage from "../../assets/images/Ilia.png";
import {VisibilityContext} from "react-horizontal-scrolling-menu";

type PersonEvidencePropsType = {
    name: string
    age: number
    topBlock: string
    mainBlock: string
}

const PersonEvidence: React.FC<PersonEvidencePropsType> = ({age, name, topBlock, mainBlock,}) => {
    const iliaImg = {
        backgroundImage: `url(${IliaImage})`
    }
    return (

        <div className={style.mainContainer}>
            <div className={style.mainItem}>
                <div className={style.photoImg} style={iliaImg}/>
                <h2>{name}</h2>
                <div className={style.ageBlock}>
                    {age} лет
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
