import React, { useState } from 'react';

import { sendMessage } from '../api/sednMessage.hook';

import AppContainer from "../container/Container";

import './form.scss';

const Form: React.FC = () => {

    const TOKEN = process.env.REACT_APP_MY_TOKEN || '';
    const CHAT_ID = process.env.REACT_APP_MY_CHAT_ID || '';

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+380');

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setName('');
        setPhone('+380');
        await sendMessage({
            parse_mode: 'HTML',
            text: `<b> Заявка ELEON-SK </b>
<b> Пользователь: </b> ${name}
<b> Телефон: </b> ${phone}`,
            chatId: CHAT_ID,
            token: TOKEN,
        });
        console.log(`Name: ${name}, Phone: ${phone}`);
        setFormSubmitted(true)
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (/^\+380\d{0,9}$/.test(value)) {
            setPhone(value);
        }
    };

    return (
        <section className="form__section" id='form'>
            <AppContainer>
                <form
                    onSubmit={handleSubmit}
                    id='tg'
                    className='form__section-form'
                >
                    {(formSubmitted === true) ? <span style={{ display: 'block' }} className='form__section-message'>Дякуємо, скоро наш менеджер з вами зв'яжеться</span> : <span style={{ display: 'none' }}></span>}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Ваше iм'я:"
                        required
                        className='form__section-input'
                    />
                    <>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            minLength={12}
                            pattern="^\+380\d{0,9}$"
                            required
                            className='form__section-input'
                        />
                    </>
                    <button type="submit" className='form__section-button'>Замовити</button>
                    <h3>ЗАЛИШИЛОСЬ <span>7</span> ШТУК !</h3>
                </form>
            </AppContainer>
        </section>

    );
};

export default Form;
