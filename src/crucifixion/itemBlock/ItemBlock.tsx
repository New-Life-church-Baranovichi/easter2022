import React from 'react';
import style from './itemBlock.module.css'

type ItemBlockType = {
    title: string
    paragraph: string
}


const ItemBlock: React.FC<ItemBlockType> = ({title, paragraph}) => {

    return (
        <div className={style.itemBlock}>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </div>
    );
};

export default ItemBlock;
