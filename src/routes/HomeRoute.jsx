import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() =>
                !localStorage.getItem('loginToken') ? (
                    <Redirect to={'/'} />
                ) : (
                        <Component />
                    )
            }
        />
    )
}

export default ProtectedRoute