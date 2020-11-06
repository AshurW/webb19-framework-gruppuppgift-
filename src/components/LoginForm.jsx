import React, {useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function LoginForm() {
    const history = useHistory()
    const tokenURL = 'https://frebi.willandskill.eu/api-token-auth/'

    function loginSubmit(e) {
        e.preventDefault()
 
        const payload = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        fetch(tokenURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
        .then(data => {
            localStorage.setItem('loginToken', data.token)
            if(data.token) {
                history.push('/home')
            } else (
                history.push('/')
            )
        })  
    }

    return (
        <div className='container'>
            <form onSubmit={loginSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name='email' className='form-control'/>
                </div>
                <div className="form-group">
                    <label>Pasword:</label>
                    <input type="text" name='password' className='form-control'/>
                </div>
                <button type="submit" className='btn btn-primary'>Login</button>
            </form>
        </div>
    )
}