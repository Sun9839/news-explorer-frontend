import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import facebook from '../../images/Facebook.svg';
import gitHub from '../../images/GitHub.svg';

function Footer(props) {
    return (
        <footer className='footer'>
            <p className='footer__text'>&#169; 2020 Supersite, Powered by News API</p>
            <div className='footer__links'>
                <Link to='/' className='footer__link'>Главная</Link>
                <a target='_blank' href='https://praktikum.yandex.ru/' className='footer__link'>Яндекс.Практикум</a>
            </div>
            <div className='footer__images'>
                <a target='_blank' className='footer__img-link' href='https://github.com/'>
                    <img src={gitHub} className='footer__image' alt='github.com/' />
                </a>
                <a target='_blank' className='footer__img-link' href='https://www.facebook.com/'>
                    <img src={facebook} className='footer__image' alt='facebook.com/' />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
