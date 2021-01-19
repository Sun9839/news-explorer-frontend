import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import skywalker from '../../images/Skywalker.jpg';

function NewsCardList(props) {
    return (
        <div className='newsCardList'>
            <h3 className={`newsCardList__title ${props.activeTitle === true ? 'newsCardList__title_active' : ''}`}>Результаты поиска</h3>
            <div className='newsCardList__cards'>
                <NewsCard
                    keyword='Звёздные воины'
                    keywordActive={true}
                    image={skywalker}
                    date='19ДБЯ'
                    title='Новоиспечённый Лорд ситхов'
                    text='Хотя Скайуокер был в ужасе от того, что он сделал, он видел в этом последнюю каплю против Ордена джедаев, и поэтому для него не было пути назад. Он неохотно поклялся служить своему новому Лорду ситхов Дарту Сидиусу, который нарёк Энакина Дартом Вейдером'
                    source='https://yandex.ru/news/'
                    sourceTitle='Яндекс.Новости'
                />
                <NewsCard
                    keyword='Звёздные воины'
                    keywordActive={true}
                    image={skywalker}
                    date='19ДБЯ'
                    title='Новоиспечённый Лорд ситхов'
                    text='Хотя Скайуокер был в ужасе от того, что он сделал, он видел в этом последнюю каплю против Ордена джедаев, и поэтому для него не было пути назад. Он неохотно поклялся служить своему новому Лорду ситхов Дарту Сидиусу, который нарёк Энакина Дартом Вейдером'
                    source='https://yandex.ru/news/'
                    sourceTitle='Яндекс.Новости'
                />
                <NewsCard
                    keyword='Звёздные воины'
                    keywordActive={true}
                    image={skywalker}
                    date='19ДБЯ'
                    title='Новоиспечённый Лорд ситхов'
                    text='Хотя Скайуокер был в ужасе от того, что он сделал, он видел в этом последнюю каплю против Ордена джедаев, и поэтому для него не было пути назад. Он неохотно поклялся служить своему новому Лорду ситхов Дарту Сидиусу, который нарёк Энакина Дартом Вейдером'
                    source='https://yandex.ru/news/'
                    sourceTitle='Яндекс.Новости'
                />
            </div>
            <button className='newsCardList__button'>Показать ещё</button>
        </div>
    );
}

export default NewsCardList;
