import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                !localStorage.getItem('loginToken') || localStorage.getItem('loginToken') === 'undefined' ? (
                    <Redirect to={'/'} />
                ) : (
                        <Component {...props}/>
                    )
            }
        />
    )
}

export default ProtectedRoute