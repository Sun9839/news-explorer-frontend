import React from 'react';
import './SearchForm.css';
import Header from "../Header/Header";
import open from '../../images/menu.svg';
import close from '../../images/close.svg';

function SearchForm(props) {
    const [isClicked, click] = React.useState(false);
    function setClick() {
        click(!isClicked);
    }
    function clickNavButton() {
        props.clickNavButton();
    }
    return(
        <div className='searchForm'>
            <Header
                navigationButtonText='Авторизоваться'
                closeImage={close}
                openImage={open}
                clickNavigationButton={clickNavButton}
            />
            <h3 className='searchForm__title'>Что творится в <br /> мире?</h3>
            <p className='searchForm__text'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
            <form className='searchForm__form'>
                <input className='searchForm__input' />
                <button
                    className={`searchForm__button ${isClicked === true ? 'searchForm__button_clicked' : ''}`}
                    onClick={setClick}
                >Искать</button>
            </form>
        </div>
    )
}

export default SearchForm;
