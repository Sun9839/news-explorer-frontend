import React from "react";
import './SavedNewsHeader.css';

function SavedNewsHeader(props) {
    return(
        <div className='savedNewsHeader'>
            <p className='savedNewsHeader__savedNews'>Сохраненные статьи</p>
            <h3 className='savedNewsHeader__title'>{props.title}</h3>
            <p className='savedNewsHeader__keywords'>По ключевым словам: <b>Звёздные войны</b></p>
        </div>
    )
}

export default SavedNewsHeader;
