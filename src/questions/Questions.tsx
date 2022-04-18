import React from 'react';
import style from './questions.module.css'

const Questions = () => {
    return (
        <div className={style.mainBlock} id={'meaning'}>
            <div className={style.mainContainer}>
                <div className={style.titleBlock}>
                    <h2>Что это значит для нас?</h2>
                    <div className={style.circle1}/>
                </div>
                <div className={style.itemBlock}>
                    <p>
                        Мы считаем себя, в общем-то, неплохими людьми, но правда в том, что безгрешных нет.
                        Невозможно не замечать зло вокруг нас, но часто мы не видим его <b>внутри себя</b>.
                    </p>
                    <p>
                        Грех, который исказил прекрасное Божье творение, человека, был побежден Иисусом Христом. <b>
                        Он взял наши грехи на себя, </b> взошел вместо нас на крест и понес наше наказание.
                    </p>
                </div>
            </div>
            <div className={style.mainContainer}>
                <div className={style.titleBlock}>
                    <h2>Что делать?</h2>
                    <div className={style.circle2}/>
                </div>
                <div className={style.itemBlock}>
                    <p>
                        Что бы жертва Иисуса имела силу в нашей жизни, достаточно:
                    </p>
                    <p>
                        <b>
                            <ol>
                                <li>Признать себя грешником и искренне раскаяться</li>
                                <li>Попросить прощения за грехи и признать Иисуса своим Спасителем</li>
                            </ol>
                        </b>
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Questions;
