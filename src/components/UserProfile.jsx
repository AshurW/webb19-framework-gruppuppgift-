import React, { useState, useEffect } from 'react'

export default function UserProfile() {

    const [online, setOnline] = useState(null)
    const url = 'https://frebi.willandskill.eu/api/v1/me'

    function fetchUser() {
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('loginToken')}`
            } 
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOnline(data)
            })
    }

    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div>
            {online && (
                <>
                    <div>{online.firstName} {online.lastName} </div>
                    <div>{online.email} </div>
                </>
            )}
        </div>
    )
}
