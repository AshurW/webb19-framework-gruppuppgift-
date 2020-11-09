import React, { useState, createContext } from 'react'

export const CustomerContext = createContext()

export function CustomerProvider(props) {

    const [customerListData, setCustomerListData] = useState(null)

    return (
        <CustomerContext.Provider value={[customerListData, setCustomerListData]}>
            {props.children}
        </CustomerContext.Provider>
    )
}
