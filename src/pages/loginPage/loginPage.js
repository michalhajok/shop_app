import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import authActions from '../../redux/auth/actions';

import Nav from '../../components/organisms/nav';
import Button from '../../components/atoms/button';
import Footer from '../../components/organisms/footer';
import './login.scss';

function LoginPage() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const history = useNavigate();
    const login = (e) => {
        e.preventDefault();
        dispatch(authActions.login(user, history));
    };

    return (
        <div className='loginPage'>
            <Nav />
            <div className='loginPage--content'>
                <header className='loginPage__header'>
                    <h2>Sign in</h2>
                </header>
                <form className='loginPage__form' onSubmit={login}>
                    <label className='form--loginInput'>
                        <FontAwesomeIcon icon={faUser} />
                        <input
                            type='text'
                            placeholder='Email'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value.trim() })}
                        />
                    </label>
                    <label className='form--loginInput'>
                        <FontAwesomeIcon icon={faLock} />
                        <input
                            type='password'
                            placeholder='Password'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value.trim() })}
                        />
                    </label>
                    <Button type='submit' click={login}>
                        Sign in
                    </Button>
                    <div className='form--register'>
                        <Link to='/shop_app/register'>Are you a new customer?</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;
