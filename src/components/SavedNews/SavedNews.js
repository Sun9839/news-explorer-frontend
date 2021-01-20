import React from 'react';
import { withRouter } from 'react-router-dom';
import './SavedNews.css';
import Header from "../Header/Header";
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import open from "../../images/menu-black.svg";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

function SavedNews(props) {
    function exit() {
        console.log('На этой страничке пока ничего не происходит');
    }
    return(
        <div className='savedNews' >
            <Header
                navigationBlackColor={true}
                navigationButtonText='Александр [&rarr;'
                openImage={open}
                clickNavigationButton={exit}
            />
            <SavedNewsHeader
                title='Александр, у вас 3 сохранённых статьи'
            />
            <NewsCardList />
            <Footer />
        </div>
    );
}

export default SavedNews;
