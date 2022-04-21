import React from 'react';
import style from './ibdn.module.css'
import ibdnImage from "../assets/images/IbdnImage.png";
import greenInstagram from "../assets/images/greenIstagram.png";

const Ibdn = () => {
    const ibdnImg = {
        backgroundImage: `url(${ibdnImage})`
    }
    const greenImg = {
        backgroundImage: `url(${greenInstagram})`
    }
    return (
        <div className={style.mainBlock}>
            {/*<div className={style.circle1}/>*/}
            {/*<div className={style.circle2}/>*/}
            <div className={style.mainContainer}>
                <div className={style.imgBlock} style={ibdnImg}/>
                <div className={style.logoBlock}>
                    <a href="https://instagram.com/ibdn.baranovichi?igshid=YmMyMTA2M2Y=">
                        <div className={style.instagramBlock}>
                            <div className={style.instagramIcon} style={greenImg}/>
                            ibdn.baranovichi
                        </div>
                    </a>
                    <div className={style.logo}>
                        <div>ИЗУЧЕНИЕ</div>
                        <div className={style.greenText}>БИБЛИИ</div>
                        <div>ДЛЯ</div>
                        <div>НЕРЕЛИГИОЗНЫХ</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ibdn;
