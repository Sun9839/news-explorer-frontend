import React from 'react';
import './NewsCard.css';
import {mainApi} from "../../utils/MainApi";

function NewsCard(props) {
    const [isClicked, clickSave] = React.useState(false);
    const [logout, setLogout] = React.useState(false);
    const jwt = localStorage.getItem('jwt');
    function addLogout() {
        setLogout(true);
    }
    function removeLogout() {
        setLogout(false);
    }
    function clickButton() {
        clickSave(!isClicked);
        if (props.saved === true) {
            mainApi.deleteCard(props.id,jwt)
                .then((data) => {
                    console.log(data)
                    props.deleteCard(data);
                })
                .catch()
        } else {
            mainApi.saveCard({
                keyword: props.keyword,
                title: props.title,
                text: props.text,
                source: props.sourceTitle,
                link: props.link,
                image: props.image,
            },jwt)
                .then()
                .catch()
        }
    }
    function clickLogout() {
        props.clickLogout();
    }
    return(
        <div className='newsCard' >
            <img src={props.image} alt={props.title} className='newsCard__image' />
            <button
                onClick={clickButton}
                onMouseOver={addLogout} onMouseOut={removeLogout}
                className={`newsCard__${props.buttonImageName} ${isClicked === true ? `newsCard__${props.buttonImageName}_clicked` : ''}`}
            />
            <button
                className={`newsCard__keyword ${props.keywordActive === true ? 'newsCard__keyword_active' : ''}`}
            >{props.keyword}</button>
            <button onClick={clickLogout} className={`newsCard__logout ${logout === true ? 'newsCard__logout_active' : ''}`}>{props.logoutText}</button>
            <p className='newsCard__date'>{props.date}</p>
            <h3 className='newsCard__title'>{props.title}</h3>
            <p className='newsCard__text'>{props.text}</p>
            <a target='_blank' className='newsCard__source' href={props.source}>{props.sourceTitle}</a>
        </div>
    );
}

export default NewsCard;
