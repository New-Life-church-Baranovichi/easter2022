import React from 'react';
import style from './navigation.module.css'
import {Link} from "react-scroll";

const Navigation = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.link}>
                <Link spy={true}
                      offset={0}
                      activeClass={style.link}
                      smooth={true}
                      duration={900}
                      style={{cursor: "pointer"}}
                      to={'history'}>
                    история
                </Link>
            </div>

            <div className={style.link}>
                <Link spy={true}
                      offset={-60}
                      activeClass={style.link}
                      smooth={true}
                      duration={900}
                      style={{cursor: "pointer"}}
                      to={'crucifixion'}>
                    распятие
                </Link>
            </div>
            <div className={style.link}>
                <Link spy={true}
                      activeClass={style.link}
                      smooth={true}
                      duration={900}
                      style={{cursor: "pointer"}}
                      to={'meaning'}>
                    значение
                </Link>
            </div>
            <div className={style.link}>
                <Link spy={true}
                      activeClass={style.link}
                      smooth={true}
                      duration={900}
                      style={{cursor: "pointer"}}
                      to={'contacts'}>
                    контакты
                </Link>
            </div>

        </div>
    );
};

export default Navigation;
