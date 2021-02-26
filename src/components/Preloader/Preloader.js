import React from "react";
import './Preloader.css';
import notFound from '../../images/not-found_v1.svg';

function Preloader(props){
    return(
        <div className={`preloader ${props.preload.preloading === true ? 'preloader__active' : ''}`}>
            <i className={`circle-preloader ${props.preload.circle === true ? 'circle-preloader__active' : ''}`} />
            <img className={`preloader__not-found ${props.preload.notFoundState === true ? 'preload__not-found_active' : ''}`} alt='notFound' src={notFound} />
            <p className={`preloader__bold-text ${props.preload.boldTextState === true ? 'preloader__bold-text_active' : ''}`}>{props.preload.boldText}</p>
            <p className={`preloader__text ${props.preload.textState === true ? 'preloader__text_active' : ''}`}>{props.preload.text}</p>
        </div>
    );
}

export default Preloader;
