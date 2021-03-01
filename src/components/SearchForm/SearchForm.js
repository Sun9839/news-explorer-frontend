import React from 'react';
import './SearchForm.css';
import Header from "../Header/Header";
import open from '../../images/menu.svg';
import close from '../../images/close.svg';
import logout from '../../images/logout.svg';

function SearchForm(props) {
    const [isClicked, click] = React.useState(false);
    const searchRef = React.useRef();
    function searchNews(e) {
        e.preventDefault();
        click(true);
        props.onSearch(searchRef.current.value);
        click(false);
    }
    function clickNavButton() {
        props.clickNavButton();
    }
    return(
        <div className='searchForm'>
            <Header
                main={props.main}
                logout={logout}
                closeImage={close}
                openImage={open}
                clickNavigationButton={clickNavButton}
                user={props.user}
            />
            <h3 className='searchForm__title'>Что творится в <br /> мире?</h3>
            <p className='searchForm__text'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
            <form className='searchForm__form'>
                <input className='searchForm__input' ref={searchRef} />
                <button
                    className={`searchForm__button ${isClicked === true ? 'searchForm__button_clicked' : ''}`}
                    onClick={searchNews}
                >Искать</button>
            </form>
        </div>
    )
}

export default SearchForm;
