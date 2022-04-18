import React from 'react';
import style from './crucifixion.module.css'
import firstImage from "../assets/images/backgroundImg.png";
import image1 from "../assets/images/img1.png";
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img3.png";
import ItemBlock from "./itemBlock/ItemBlock";

const Crucifixion = () => {
    const backgroundImg = {
        backgroundImage: `url(${firstImage})`
    }
    const img1 = {
        backgroundImage: `url(${image1})`
    }
    const img2 = {
        backgroundImage: `url(${image2})`
    }
    const img3 = {
        backgroundImage: `url(${image3})`
    }
    return (
        <div className={style.mainBlock} style={backgroundImg}>
            <div className={style.imagesContainer}>
                <div className={style.imageBlock} style={img1}/>
                <div className={style.imageBlock} style={img2}/>
                <div className={style.imageBlock} style={img3}/>
            </div>
            <div className={style.textContainer}>
                <div className={style.titleBlock}>
                    <h2>Распятие</h2>
                    <p>
                        Самая мучительная казнь, когда либо изобретенная человеком
                    </p>
                </div>
                    <ItemBlock title={'Жертва задыхается'}
                               paragraph={'После многих часов или даже дней висения на кресте, вес тела опускает диафрагму, затрудняет дыхание.'}/>
                    <ItemBlock title={'Ноги могут быть сломаны'}
                               paragraph={'Чтобы ускорить казнь ломали ноги жертвы. Это препятствовало тому, чтобы человек мог оттолкнуться ногами и дышать.'}/>
                    <ItemBlock title={'Гвозди повреждали нерв на руке'}
                               paragraph={'Когда жертва приподнималась чтобы дышать, запястья поворачивались, что раздражало нервы и вызывало сильную боль в руках.'}/>
                    <ItemBlock title={'Избиение перед распятием'}
                               paragraph={'Человека избивали кнутом с девятью хвостами, у которых были металлические наконечники. Солдаты били кнутом по спине, ягодицам и ногам осужденного. Это продолжалось в течение длительного времени.'}/>
                    <ItemBlock title={'Гиповолемический шок'}
                               paragraph={'Это происходит, когда человек теряет 20 или более процентов крови. Потеря крови истощает организм, сердце не может нормально работать.'}/>
                    <ItemBlock title={'Плечи жертвы были вывихнуты'}
                               paragraph={'Руки жертвы к кресту прибивали еще на земле, потом крест ставили вертикально, и вес тела (пока ноги не были прибиты) вытягивал руки и приводил к вывихам.'}/>
                    <ItemBlock title={'Все происходит одновременно'}
                               paragraph={'Результат - огромная физическая боль. Процесс распятия длился долго. В некоторых случаях распятие длилось до десяти дней. Это был мучительный способ казни.'}/>
            </div>
        </div>
    );
};

export default Crucifixion;
