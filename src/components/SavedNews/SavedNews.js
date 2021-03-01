import React from 'react';
import { withRouter } from 'react-router-dom';
import './SavedNews.css';
import Header from "../Header/Header";
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import open from "../../images/menu-black.svg";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";
import {mainApi} from "../../utils/MainApi";
import { CurrentUserContext } from '../../context/currentUserContext';
import logout from '../../images/logout-black.svg';

function SavedNews(props) {
    const jwt = localStorage.getItem('jwt');
    const [user, setUser] = React.useState({});
    const [newsCards, setNewsCards] = React.useState([]);
    const [newsAddButton, setNewsAddButton] = React.useState(false);
    function exit() {
        localStorage.removeItem('jwt');
        props.exit();
        props.history.push('/');
    }
    function clickDelete(){}
    function offNewsButton() {
        setNewsAddButton(false);
    }
    function getCards(card){
        const newCards = newsCards.filter(item => item._id !== card._id);
        setNewsCards(newCards)
    }
    function unique(arr) {
        return Array.from(new Set(arr));
    }
    React.useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt === null) {
            props.history.push('/');
        }
        mainApi.getUser(jwt)
            .then((data) => {
                setUser(data);
            })
            .catch(() => {
                props.history.push('/');
            })
        mainApi.getCards(jwt)
            .then((data) => {
                setNewsCards(data);
                if (data.length > 3){
                    setNewsAddButton(true);
                }
            })
            .catch(() => {
                setNewsCards({})
            })
    }, [])
    return(
        <CurrentUserContext.Provider value={user}>
            <div className='savedNews' >
                <Header
                    savedNews={true}
                    logout={logout}
                    navigationBlackColor={true}
                    user={user}
                    openImage={open}
                    clickNavigationButton={exit}
                />
                <SavedNewsHeader
                    title={
                        `${user.name === undefined ? '' : user.name.slice(0,1).toUpperCase() + user.name.slice(1)}, 
                        у вас ${newsCards.length > 0 ? newsCards.length : 'нет'} 
                        ${newsCards.length === 1 ? 'сохранённая статья' : `сохранённых
                        ${newsCards.length === (2 && 3 && 4) ? 'статьи' : 'статей'}`}`
                    }
                    keyWords={unique(newsCards).length > 2 ? `${unique(newsCards).map(item => ` ${item.keyword}`).slice(4)} и ещё ${unique(newsCards).length - 2} другим` : unique(newsCards).map(item => `${item.keyword}, `)}
                />
                <NewsCardList
                    logoutText='убрать из сохранённых'
                    saved={true}
                    keywordActive={true}
                    newsCards={newsCards}
                    activeTitle={false}
                    newsCardsActive={newsCards.length > 0}
                    clickLogout={clickDelete}
                    button={newsAddButton}
                    buttonOff={offNewsButton}
                    buttonImageName='deleteButton'
                    deleteCard={getCards}
                />
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default withRouter(SavedNews);
