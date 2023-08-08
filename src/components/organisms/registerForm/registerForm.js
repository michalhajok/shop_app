import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../../atoms/button';

import './registerForm.scss';
import api from '../../../utils/api';

function RegisterForm() {
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        lastname: '',
        sex: 'men',
        birthday: '',
        phone: ''
    });

    const history = useNavigate();

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const addUser = async (e) => {
        e.preventDefault();

        const res = await api.post('user/register', user);

        setUser({
            email: '',
            password: '',
            name: '',
            lastname: '',
            sex: 'men',
            birthday: '',
            phone: ''
        });

        if (res.ok) {
            history('/shop_app');
        }
    };

    const { email, password, name, lastname, sex, birthday, phone } = user;

    return (
        <div className='registerPage__registerForm'>
            <form onSubmit={addUser} className='registerForm--form'>
                <h2>Register</h2>
                <label>
                    <p>Email:</p>
                    <input
                        placeholder='email'
                        autoComplete='off'
                        required
                        name='email'
                        type='email'
                        value={email}
                        onChange={handleUser}
                    />
                </label>
                <label>
                    <p>Password:</p>
                    <input
                        placeholder='password'
                        autoComplete='off'
                        pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
                        required
                        name='password'
                        type='password'
                        minLength='8'
                        value={password}
                        onChange={handleUser}
                    />
                </label>
                <label>
                    <p>Name:</p>
                    <input
                        placeholder='name'
                        autoComplete='off'
                        required
                        name='name'
                        type='text'
                        value={name}
                        onChange={handleUser}
                    />
                </label>
                <label>
                    <p>Lastname:</p>
                    <input
                        placeholder='last name'
                        autoComplete='off'
                        required
                        name='lastname'
                        type='text'
                        value={lastname}
                        onChange={handleUser}
                    />
                </label>
                <label>
                    <p>Sex:</p>
                    <select name='sex' value={sex} onChange={handleUser}>
                        <option value='men'>Men</option>
                        <option value='women'>Women</option>
                    </select>
                </label>
                <label>
                    <p>Birthday:</p>
                    <input
                        placeholder='birthday'
                        autoComplete='off'
                        name='birthday'
                        type='date'
                        value={birthday}
                        onChange={handleUser}
                    />
                </label>
                <label>
                    <p>Phone number:</p>
                    <input
                        placeholder='phone number'
                        autoComplete='off'
                        required
                        name='phone'
                        type='number'
                        maxLength='12'
                        minLength='7'
                        value={phone}
                        onChange={handleUser}
                    />
                </label>
                <Button type='submit' click={addUser}>
                    Register
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
