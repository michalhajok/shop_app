import React from 'react'
import { useDispatch } from 'react-redux'
import authActions from '../../../redux/auth/actions'

const SignOut = () => {

    const dispatch = useDispatch()

    const logout = () =>{
        dispatch(authActions.logout())
    }

    return (
        <button onClick={logout}>
            Sign out
        </button>
    )
}

export default SignOut
