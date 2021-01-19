import React from 'react';
import './Main.css';
import Popup from '../Popup/Popup';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';

function Main(props) {
    const [popupState, setPopupState] = React.useState('false');
    function openPopup() {
        setPopupState(true);
    }
    function closePopup() {
        setPopupState(false);
    }
    return(
        <div className='Main'>
            <Popup
                opened={popupState}
                closePopup={closePopup}
            />
            <SearchForm
                clickNavButton={openPopup}
            />
            <NewsCardList
                activeTitle={true}
            />
            <About />
            <Footer />
        </div>
    );
}

export default Main;
