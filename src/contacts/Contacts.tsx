import React from 'react';
import style from './contact.module.css';
import mobileImg from '.././assets/images/phoneImage.png';
import instagramIcon from '.././assets/images/instagramIcon.png';
import telegramIcon from '.././assets/images/telegramIcon.png';
import vkontakteIcon from '.././assets/images/vkontakteIcon.png';


const Contacts = () => {
    const phoneImage = {
        backgroundImage: `url(${mobileImg})`
    }
    const instagram = {
        backgroundImage: `url(${instagramIcon})`
    }
    const telegram = {
        backgroundImage: `url(${telegramIcon})`
    }
    const vkontakte = {
        backgroundImage: `url(${vkontakteIcon})`
    }
    return (
        <div className={style.contactsBlock}>
            <div className={style.mainContainer}>
                <div className={style.textBlock}>
                    <h2>Интересно?</h2>
                    <p>
                        Узнай больше о Боге, церкви, христианской молодежи в наших соц. сетях.
                    </p>
                </div>
                <div className={style.socialBlock}>

                    <a href="https://instagram.com/nlife.youth/">
                        <div className={style.icon} style={instagram}/>
                    </a>
                    <a href="tg://resolve?domain=nlifeyouth">
                        <div className={style.icon} style={telegram}/>
                    </a>
                    <a href="https://vk.com/nlife.youth">
                        <div className={style.icon} style={vkontakte}/>
                    </a>
                    <div>Ещё больше <span><a href="https://taplink.cc/nlife.youth">здесь</a></span>
                    </div>
                </div>

            </div>
            <div className={style.imageBlock} style={phoneImage}/>
        </div>
    );
};

export default Contacts;
