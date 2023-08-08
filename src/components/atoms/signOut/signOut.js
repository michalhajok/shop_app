import React from 'react';
import { useDispatch } from 'react-redux';
import authActions from '../../../redux/auth/actions';

function SignOut() {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(authActions.logout());
    };

    return (
        <div onClick={logout} aria-hidden='true' className='nav__link'>
            Sign out
        </div>
    );
}

export default SignOut;
