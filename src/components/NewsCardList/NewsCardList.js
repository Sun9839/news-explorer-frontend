import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { months } from "../../constants/constants";

function NewsCardList(props) {
    const [listLength, setLength] = React.useState(3);
    function addNewses() {
        if (props.newsCards.length <= listLength) {
            props.buttonOff();
        } else if ((props.newsCards.length <= listLength + 1) || (props.newsCards.length <= listLength + 2)) {
            setLength(listLength + 3);
            props.buttonOff();
        } else {
            setLength(listLength + 3);
        }
    }
    function renderMonth(month){
        return months[month];
    }
    function clickLogout(){
        props.clickLogout();
    }
    function deleteCard(card) {
        props.deleteCard(card);
    }
    function renderDate(date){
        const day = date.slice(8,10);
        const numberOfMonth = date.slice(5,7);
        const year = date.slice(0,4);
        if (day.startsWith('0')) {
            return `${day.slice(1,2)} ${numberOfMonth} ${year}`
        } else {
            return `${day} ${renderMonth(numberOfMonth)} ${year}`
        }
    }
    React.useEffect(() => {
        setLength(3);
    },[props.newsCards]);
    return (
        <div className={`newsCardList ${props.newsCardsActive === true ? 'newsCardList__active' : ''}`}>
            <h3 className={`newsCardList__title ${(props.activeTitle === true && props.newsCards.length > 0) ? 'newsCardList__title_active' : ''}`}>Результаты поиска</h3>
            <div className='newsCardList__cards'>
                {
                    props.newsCards.slice(0, listLength).map((card) => {
                        return(
                            <NewsCard
                                logoutText={props.logoutText}
                                id={card._id}
                                saved={props.saved}
                                buttonImageName={props.buttonImageName}
                                clickLogout={clickLogout}
                                keyword={props.keyWord !== undefined ? props.keyWord : card.keyword}
                                keywordActive={props.keywordActive}
                                image={card.urlToImage !== undefined ? card.urlToImage : card.image}
                                date={card.publishedAt !== undefined ? renderDate(card.publishedAt) : renderDate(card.date)}
                                title={card.title}
                                text={card.description}
                                key={Math.random()}
                                link={card.url !== undefined ? card.url : card.link}
                                source={card.source}
                                sourceTitle={card.author}
                                deleteCard={deleteCard}
                            />
                        )
                    })}
            </div>
            <button onClick={addNewses} className={`newsCardList__button ${props.button === true ? 'newsCardList__button_active' : ''}`}>Показать ещё</button>
        </div>
    );
}

export default NewsCardList;
