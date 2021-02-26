import React, { useCallback } from "react";
import './Popup.css';
import close from '../../images/close.svg';

function MessagePopup(props) {
    function clickBackground(e) {
        if( e.target.classList.contains('popup')) {
            props.closePopup();
        }
    }
    function openLoginPopup(){
        props.openLoginPopup();
    }
    function clickClose() {
        props.closePopup();
    }
    React.useEffect(() => {
        document.addEventListener('keydown', function (evt) {
            if(evt.key === 'Escape') {
                props.closePopup();
            }
        })
    })
    return(
        <div onClick={clickBackground} className={`popup ${props.opened === true ? 'popup__opened' : ''}`}>
            <button onClick={clickClose} type='button' className='popup__close'><img className='popup__close-img' alt='close' src={close} /></button>
            <div className='popup__container popup__container_small'>
                <p className='popup__text'>Пользователь успешно зарегистрирован!</p>
                <button onClick={openLoginPopup} type='button' className='popup__swipe-button'>Войти</button>
            </div>
        </div>
    );
}

export default MessagePopup;
