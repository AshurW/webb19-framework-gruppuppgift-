import React, {useState, useEffect} from 'react'
import CustomerList from '../components/CustomerList'
import UserProfile from '../components/UserProfile'

export default function HomePage() {

    const [userLoggedIn, setuserLoggedIn] = useState({})
    const userLoggedInURL = 'https://frebi.willandskill.eu/api/v1/me'

    function fetchLoggedInUser() {
        fetch(userLoggedInURL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('loginToken')}`
            } 
        })
        .then(res => res.json())
        .then(data => setuserLoggedIn(data))
    }

    useEffect(() => {
        fetchLoggedInUser()
    }, [])

    return (
        <div className='container'>
            <h1>Welcome {userLoggedIn && userLoggedIn.firstName}</h1>
            <UserProfile />
            <CustomerList />
        </div>
    )
}
