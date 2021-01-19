import React from 'react';
import './Popup.css';
import close from '../../images/close.svg';

function Popup(props) {
    function clickBackground(e) {
        if( e.target.classList.contains('popup')) {
            props.closePopup();
        }
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
        <form onClick={clickBackground} className={`popup ${props.opened === true ? 'popup__opened' : ''}`}>
            <button onClick={clickClose} type='button' className='popup__close'><img className='popup__close-img' alt='close' src={close} /></button>
            <div className='popup__container'>
                <h3 className='popup__title'>Вход</h3>
                <span className='popup__input-span'>Email</span>
                <input className='popup__input' placeholder='Введите почту' />
                <span className='popup__input-span'>Пароль</span>
                <input className='popup__input' placeholder='Введите пароль' />
                <button className='popup__button'>Войти</button>
                <p className='popup__alternative'>или <button type='button' className='popup__swipe-button'>Зарегистрироваться</button></p>
            </div>
        </form>
    );
}

export default Popup;
