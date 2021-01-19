import React from 'react';
import './NewsCard.css';

function NewsCard(props) {
    const [isClicked, clickSave] = React.useState(false);
    function toggleButton() {
        clickSave(!isClicked);
    }
    return(
        <div className='newsCard' >
            <img src={props.image} alt={props.title} className='newsCard__image' />
            <button
                onClick={toggleButton}
                className={`newsCard__saveButton ${isClicked === true ? 'newsCard__saveButton_clicked' : ''}`}
            />
            <button
                className={`newsCard__keyword ${props.keywordActive === true ? 'newsCard__keyword_active' : ''}`}
            >{props.keyword}</button>
            <p className='newsCard__date'>{props.date}</p>
            <h3 className='newsCard__title'>{props.title}</h3>
            <p className='newsCard__text'>{props.text}</p>
            <a target='_blank' className='newsCard__source' href={props.source}>{props.sourceTitle}</a>
        </div>
    );
}

export default NewsCard;
