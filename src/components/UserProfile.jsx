import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function UserProfile() {

    const [userData] = useContext(UserContext)

    return (
        <div>
            {userData && (
                <>
                    <div>{userData.firstName} {userData.lastName} </div>
                    <div>{userData.email} </div>
                </>
            )}
        </div>
    )
}
