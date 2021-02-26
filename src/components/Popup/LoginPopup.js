import React, { useCallback } from "react";
import './Popup.css';
import close from '../../images/close.svg';

function LoginPopup(props) {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const formRef = React.createRef();
    const handleChange = (event) => {
        props.deleteLoginError();
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest(".popup").checkValidity());
    };
    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    function clickBackground(e) {
        if( e.target.classList.contains('popup')) {
            props.closePopup();
            resetForm();
            formRef.current.reset();
        }
    }
    function openRegPopup() {
        props.openRegPopup();
        resetForm();
    }
    function clickClose() {
        props.closePopup();
        resetForm();
        formRef.current.reset();
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.login({
            email: values.email,
            password: values.password,
        })
        formRef.current.reset();
    }
    React.useEffect(() => {
        document.addEventListener('keydown', function (evt) {
            if(evt.key === 'Escape') {
                props.closePopup();
            }
        })
    })
    return(
        <form onSubmit={handleSubmit} ref={formRef} noValidate onClick={clickBackground} className={`popup ${props.opened === true ? 'popup__opened' : ''}`}>
            <button onClick={clickClose} type='button' className='popup__close'><img className='popup__close-img' alt='close' src={close} /></button>
            <div className='popup__container'>
                <h3 className='popup__title'>Вход</h3>
                <span className='popup__input-span'>Email</span>
                <input
                    value={values.email} name='email' onChange={handleChange}
                    type="email" required className='popup__input' placeholder='Введите почту' maxLength={40}
                />
                <span className='popup__error' >{errors.email}</span>
                <span className='popup__input-span'>Пароль</span>
                <input
                    value={values.password} name='password' type='password' onChange={handleChange}
                    minLength={6} maxLength={30} required className='popup__input' placeholder='Введите пароль'
                />
                <span className='popup__error' >{errors.password}</span>
                <span className={`popup__creating-error popup__creating-error_login ${props.loginError === true ? 'popup__creating-error_active' : ''}`}>Неправильная почта или пароль</span>
                <button disabled={!isValid} className={`popup__button ${isValid === true ? 'popup__button_locked' : ''}`}>Войти</button>
                <p className='popup__alternative'>или <button onClick={openRegPopup} type='button' className='popup__swipe-button'>Зарегистрироваться</button></p>
            </div>
        </form>
    );
}

export default LoginPopup;
