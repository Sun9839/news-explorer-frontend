import React from 'react';
import './About.css';
import avatar from '../../images/avatar.JPG';

function About(props) {
    return (
        <div className='about'>
            <img alt='Александр' className='about__avatar' src={avatar} />
            <div className='about__container'>
                <h3 className='about__name'>Об авторе</h3>
                <p className='about__paragraph'>
                    Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.
                </p>
                <p className='about__paragraph'>
                    Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.
                </p>
            </div>
        </div>
    );
}

export default About;
