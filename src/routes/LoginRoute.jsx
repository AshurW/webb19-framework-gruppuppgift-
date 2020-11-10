import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const LoginRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() =>
                localStorage.getItem('loginToken') && localStorage.getItem('loginToken') !== 'undefined' ? (
                    <Redirect to={'/home'} />
                ) : (
                        <Component />
                    )
            }
        />
    )
}

export default LoginRoute