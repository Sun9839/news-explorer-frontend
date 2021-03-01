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
                    <Link className={`navigation__link ${props.blackColor === true ? 'navigation__link_black' : ''} 
                    ${props.main === true ? 'navigation__link_active' : ''}`}
                          to='/'>Главная</Link>
                </li>
                <li className={props.user.name != null ? '' : 'navigation__disabled'}>
                    <Link className={`navigation__link ${props.blackColor === true ? 'navigation__link_black' : ''}
                          ${props.savedNews === true ? 'navigation__link_black-active' : ''}`}
                          to='/saved-news'>Сохранённые статьи</Link>
                </li>
            </ul>
            <button onClick={handleClick} className={`navigation__button ${props.blackColor === true ? 'navigation__button_black' : ''}`}>
                {props.user.name === undefined ? 'Авторизоваться' : props.user.name.slice(0,1).toUpperCase() + props.user.name.slice(1)}
                <img className={`navigation__exit-img ${props.user.name != null ? 'navigation__exit-img_active' : ''}`} alt='exit' src={props.logout} />
            </button>
        </nav>
    )
}

export default Navigation;
