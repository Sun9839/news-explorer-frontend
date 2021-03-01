import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import close from '../../images/close.svg';

function Header(props) {
    const open = props.openImage;
    const [menuState, setMenuState] = React.useState(false)
    const [headerColor, setHeaderColor] = React.useState(false)
    const [menuImage, setMenuImage] = React.useState(false)
    function clickMenu() {
        setMenuState(!menuState);
        setHeaderColor(!headerColor)
        setMenuImage(!menuImage)
    }
    function handleClick() {
        props.clickNavigationButton();
        setMenuState(false);
        setHeaderColor(false)
        setMenuImage(false)
    }
    return (
        <div className={`header ${headerColor === true ? 'header__color_dark' : ''}`}>
            <h3 className='header__title'>NewsExplorer</h3>
            <button className='header__menu' onClick={clickMenu}>
                <img alt='Меню' className='header__menu-img' src={menuImage === true ? close : open} />
            </button>
            <Navigation
                savedNews={props.savedNews}
                main={props.main}
                active={menuState}
                logout={props.logout}
                user={props.user}
                blackColor={props.navigationBlackColor}
                onClick={handleClick}
            />
        </div>
    )
}
export default Header;
