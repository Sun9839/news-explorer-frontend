import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";

function Navigation(props) {
    function handleClick(){
        props.onClick();

    }
    return (
        <nav className={`navigation ${props.active === true ? 'navigation__active' : ''}`}>
            <ul className='navigation__links'>
                <li>
                    <Link className={`navigation__link ${props.blackColor === true ? 'navigation__link_black' : ''}`} to='/'>Главная</Link>
                </li>
                <li>
                    <Link className={`navigation__link ${props.blackColor === true ? 'navigation__link_black' : ''}`} to='/saved-news'>Сохранённые статьи</Link>
                </li>
            </ul>
            <button onClick={handleClick} className={`navigation__button ${props.blackColor === true ? 'navigation__button_black' : ''}`}>{props.buttonText}</button>
        </nav>
    )
}

export default Navigation;
