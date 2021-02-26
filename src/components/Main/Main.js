import React from 'react';
import './Main.css';
import { withRouter} from 'react-router-dom'
import LoginPopup from '../Popup/LoginPopup';
import RegPopup from '../Popup/RegPopup';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
import { newsApi } from "../../utils/NewsApi";
import Preloader from "../Preloader/Preloader";
import {mainApi} from "../../utils/MainApi";
import MessagePopup from "../Popup/MessagePopup";

function Main(props) {
    const [loginPopupState, setLoginPopupState] = React.useState(false);
    const [regPopupState, setRegPopupState] = React.useState(false);
    const [newses, setNewses] = React.useState([]);
    const [newsesState, setNewsesState] = React.useState(false);
    const [newsAddButton, setNewsAddButton] = React.useState(false);
    const [keyWord, setKeyWord] = React.useState('');
    const [preload, setPreload] = React.useState({
        preloading: false,
        circle: false,
        notFoundState: false,
        boldTextState: false,
        boldText: '',
        textState: false,
    });
    const [messagePopup, setMessagePopup] = React.useState(false);
    const [creatingError, setCreatingError] =React.useState(false);
    const [loginError, setLoginError] =React.useState(false);
    function openLoginPopup() {
        setLoginPopupState(true);
        setMessagePopup(false);
        setRegPopupState(false);
        setLoginError(false);
    }
    function openRegPopup() {
        setLoginPopupState(false);
        setRegPopupState(true);
        setCreatingError(false);
    }
    function closePopup() {
        setLoginPopupState(false);
        setRegPopupState(false);
        setCreatingError(false);
        setMessagePopup(false);
        setLoginError(false);
    }
    function offNewsButton(){
        setNewsAddButton(false);
    }
    function searchNews(question){
        localStorage.removeItem('news');
        setNewsesState(false);
        setPreload({
            preloading: true,
            circle: true,
            boldTextState: false,
            boldText: '',
            textState: true,
            text: 'Идет поиск новостей...'
        });
        newsApi.findNewses(question)
            .then((data) => {
                if (data.articles.length > 3) {
                    setNewsAddButton(true);
                }
                if (data.articles.length > 0) {
                    setPreload({
                        preloading: false,
                    });
                    setNewsesState(true);
                    setNewses(data.articles);
                    localStorage.setItem('news',JSON.stringify(data.articles));
                    setKeyWord(question);
                } else {
                    setPreload({
                        preloading: true,
                        circle: false,
                        notFoundState: true,
                        boldTextState: true,
                        boldText: 'Ничего не найдено',
                        textState: true,
                        text: 'К сожалению по вашему запросу ничего не найдено.'
                    });
                }
            })
            .catch(() => {
                setPreload({
                    preloading: true,
                    circle: false,
                    notFoundState: true,
                    boldTextState: true,
                    boldText: 'Ничего не найдено',
                    textState: true,
                    text: 'К сожалению по вашему запросу ничего не найдено.'
                });
            })
    }
    function deleteCreatingError() {
        setCreatingError(false);
    }
    function deleteLoginError() {
        setLoginError(false);
    }
    function createNewUser(obj){
        mainApi.createUser(obj)
            .then(() => {
                closePopup();
                setMessagePopup(true);
            })
            .catch((err) => {
                setCreatingError(true);
            })
    }
    function login(obj) {
        mainApi.login(obj)
            .then((data) => {
                console.log(data._id);
                localStorage.setItem('jwt',data._id);
                props.loggedIn();
                props.history.push('/saved-news');
            })
            .catch(() => {
                setLoginError(true);
            })
    }
    React.useEffect(() => {
        const lastNewses = JSON.parse(localStorage.getItem('news'))
        if (lastNewses != null){
            setNewses(lastNewses);
            setNewsesState(true);
            if (lastNewses.length > 3){
                setNewsAddButton(true);
            }
        }
    }, [])
    return(
        <div className='Main'>
            <LoginPopup
                opened={loginPopupState}
                closePopup={closePopup}
                openRegPopup={openRegPopup}
                login={login}
                loginError={loginError}
                deleteLoginError={deleteLoginError}
            />
            <RegPopup
                closePopup={closePopup}
                opened={regPopupState}
                openLoginPopup={openLoginPopup}
                createNewUser={createNewUser}
                creatingError={creatingError}
                deleteCreatingError={deleteCreatingError}
            />
            <MessagePopup
                closePopup={closePopup}
                openLoginPopup={openLoginPopup}
                opened={messagePopup}
                />
            <SearchForm
                clickNavButton={openLoginPopup}
                onSearch={searchNews}
            />
            <NewsCardList
                newsCards={newses}
                activeTitle={true}
                newsCardsActive={newsesState}
                button={newsAddButton}
                buttonOff={offNewsButton}
                keyWord={keyWord}
            />
            <Preloader
            preload={preload}
            />
            <About />
            <Footer />
        </div>
    );
}

export default withRouter(Main);
