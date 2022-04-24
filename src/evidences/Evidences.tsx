import React from 'react';
import style from './evidences.module.css'
import PersonEvidence from "./personEvidence/PersonEvidence";
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import "./hideScrollBar.css";
import VadimImg from "../assets/images/Vadim.png";
import NastyaImg from "../assets/images/Nastia.png";

type PersonDataType = {
    id: number
    name: string
    backgroundImage: string
    age: string
    topBlock: string
    mainBlock: string
}

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const personsData: Array<PersonDataType> = [
    {
        id: 0,
        name: 'Вадим',
        backgroundImage: `url(${VadimImg})`,
        age: '28 лет',
        topBlock: 'Какая-то информация, может о семье или еще что. Что бы было видно, что живой человек',
        mainBlock: 'В церковь меня привели родители в раннем подростковом возрасте, но до того времени в жизни моей семьи была сплошная разруха. Так вышло, что мой отец воевал в Афганистане, и вернулся оттуда уже пристрастившимся к наркотикам. Мои родители долгие годы были в наркотической зависимости, часто бывав в шаге от смерти из-за передозировок и других ужасных вещей, и многие уже поставили крест на моей семье, никто уже не ожидал ничего доброго от родителей, от меня и от моей старшей сестры. Родители довели себя до ужасного состояния, у нас дома был притон, и казалось, что нету никакого шанса на избавление, были испробованы различные учреждения для освобождения от зависимости, были тюремные заключения, но по итогу раз за разом наркотики возвращались в их жизнь. Но Бог дал шанс моей семье! Однажды моему папе встретился человек, который раньше также был в наркотической зависимости, и он рассказал о церкви, о том, что есть Иисус, который умер за наши грехи и Он способен избавить от всех зависимостей, и, что более важно - дать спасение! Мои родители прошли программу в христианском центре реабилитации, Бог дал избавление, исцелил от многих хронических болезней, семья восстановилась, и спустя долгие годы, мы в церкви, мы служим Богу. Иисус умер за мои и твои грехи, и это даёт мне надежду!'
    },
    {
        id: 1,
        name: 'Настя',
        backgroundImage: `url(${NastyaImg})`,
        age: '31 год',
        topBlock: 'Какая-то информация, может о семье или еще что. Что бы было видно, что живой человек',
        mainBlock: 'Мое знакомство с церковью и с верующей молодёжью произошло в период моего подросткового возраста, чему я очень рада.\n' +
            'В тот период я проживала не очень «счастливые» дни, ведь в моей семье погиб отец, и мне хотелось чувствовать себя значимой. Я пыталась найти себя в окружении друзей, которые чаще всего вели не очень хороший образ жизни. Тогда мне казалось, что это очень круто: вечеринки с выпивкой, веселье от того, что над кем-то издеваются. И я старалась ничем не уступать своим «друзьям».\n' +
            'В тот период моего странствования по подростковым развлечениям меня пригласили на молодёжное служение в церковь «Новая Жизнь», на котором молодым людям, которые впервые пришли в церковь, рассказывали о Боге.\n' +
            'Когда я была на том мероприятии, мне очень понравилось общение с молодёжью, организовавшей служение, но больше всего меня «зацепило» то, как они общались между собой... они старались помогать друг другу во всем и делали это очень искренне и по-настоящему. Не просто для того, чтобы  достичь какого-то результата, а для того, чтобы поддержать друг друга, ведь в моих отношениях с друзьями такого не было, и это сразу же бросилось в глаза.\n' +
            'Спустя некоторое время, читая Библию, я узнала секрет отношений ребят в церкви через один стих:\n' +
            '«Нет больше той любви, как если кто положит душу свою за друзей своих. » Евангелие от Иоанна 15: 13\n' +
            '\n' +
            'Cо временем я поняла, что в церкви между молодыми людьми складываются отличные отношения именно благодаря тому, что однажды Иисус отдал за них свою жизнь чтобы они были прощены, спасены Богом, и стали замечательными друзьями друг другу. \n' +
            'Ведь Иисус сделал тоже самое и для меня - умер и воскрес, чтобы в моей жизни также все стало настоящим: друзья, отношения, новая жизнь и вера!'
    },
]


const Evidences = () => {
    const [items] = React.useState(personsData);
    return (
        <div className={style.mainBlock}>
            <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                onWheel={onWheel}
            >
                {items.map(i => <PersonEvidence name={i.name}
                                                age={i.age}
                                                topBlock={i.topBlock}
                                                mainBlock={i.mainBlock}
                                                key={i.id}
                                                avatar={{backgroundImage: i.backgroundImage}}
                    />
                )}
            </ScrollMenu>
        </div>
    );
};

function Arrow({
                   children,
                   disabled,
                   onClick
               }: {
    children: React.ReactNode;
    disabled: boolean;
    onClick: VoidFunction;
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: "pointer",
                display: "none",
                flexDirection: "column",
                justifyContent: "center",
                right: "1%",
                opacity: disabled ? "0" : "1",
                userSelect: "none"
            }}
        >
            {children}
        </button>
    );
}

function LeftArrow() {
    const {isFirstItemVisible, scrollPrev} =
        React.useContext(VisibilityContext);

    return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            Left
        </Arrow>
    );
}

function RightArrow() {
    const {isLastItemVisible, scrollNext} = React.useContext(VisibilityContext);

    return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
            Right
        </Arrow>
    );
}

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}

export default Evidences;
