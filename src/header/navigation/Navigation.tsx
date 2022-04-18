import React from 'react';
import style from './navigation.module.css'
import {Link} from "react-scroll";

const Navigation = () => {
    return (
        <div className={style.mainBlock}>
                <Link spy={true}
                      activeClass={style.link}
                      smooth={true}
                      duration={500}
                      style={{cursor: "pointer"}}
                      to={'history'}>
                    история
                </Link>
            <Link spy={true}
                  activeClass={style.link}
                  smooth={true}
                  duration={500}
                  style={{cursor: "pointer"}}
                  to={'crucifixion'}>
                распятие
            </Link>
            <Link spy={true}
                  activeClass={style.link}
                  smooth={true}
                  duration={500}
                  style={{cursor: "pointer"}}
                  to={'meaning'}>
                значение
            </Link>
            <Link spy={true}
                  activeClass={style.link}
                  smooth={true}
                  duration={500}
                  style={{cursor: "pointer"}}
                  to={'contacts'}>
                контакты
            </Link>
        </div>
    );
};

export default Navigation;
