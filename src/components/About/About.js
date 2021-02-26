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
                    Меня зовут Александр. Я занимаюсь веб-разработкой, в основном на реакте.
                </p>
                <p className='about__paragraph'>
                    За время обучения в Практикуме я уже был в трёх академах, надеюсь, что четвёртый не получу и меня не отчислят.
                </p>
            </div>
        </div>
    );
}

export default About;
