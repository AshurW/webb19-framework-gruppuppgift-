import React, { useState, useEffect, useContext } from 'react'
import CustomerList from '../components/CustomerList'
import UserProfile from '../components/UserProfile'
import { UserContext } from '../contexts/UserContext'

export default function HomePage() {

    const [userData, setUserData] = useContext(UserContext)
    const userLoggedInURL = 'https://frebi.willandskill.eu/api/v1/me'

    function fetchLoggedInUser() {
        if (!userData) {
            fetch(userLoggedInURL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('loginToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setUserData(data))
        }
    }

    useEffect(() => {
        fetchLoggedInUser()
    }, [])

    return (
        <div className='container' mx-auto>
            <h1>Welcome {userData && userData.firstName}</h1>
            <UserProfile />
            <CustomerList />
        </div>
    )
}
