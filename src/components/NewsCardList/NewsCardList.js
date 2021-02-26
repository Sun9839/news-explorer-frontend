import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

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
                                keyword={props.keyWord}
                                keywordActive={false}
                                image={card.urlToImage}
                                date={card.publishedAt}
                                title={card.title}
                                text={card.description}
                                key={Math.random()}
                                sourceTitle={card.author}
                            />
                        )
                    })}
            </div>
            <button onClick={addNewses} className={`newsCardList__button ${props.button === true ? 'newsCardList__button_active' : ''}`}>Показать ещё</button>
        </div>
    );
}

export default NewsCardList;
