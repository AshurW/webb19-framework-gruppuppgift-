import React, {useState, createContext} from 'react'

export const UserContext = createContext()

export function UserProvider(props) {

    const [userData, setUserData] = useState(null)

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {props.children}
        </UserContext.Provider>
    )
}
