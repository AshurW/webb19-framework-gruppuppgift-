import React, { useState, useEffect } from 'react'
import AddCustomerForm from './AddCustomerForm'
import { Link } from 'react-router-dom';

export default function CustomerList() {
    const [customerListData, setCustomerListData] = useState(null)
    const customerListURL = 'https://frebi.willandskill.eu/api/v1/customers'

    function fetchCustomerList() {
        fetch(customerListURL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('loginToken')}`
            } 
        })
            .then(res => res.json())
            .then(data => setCustomerListData(data.results))
    }

    useEffect(() => {
        fetchCustomerList()
    }, [])


    return (
        <div>
            <AddCustomerForm />
            <h3>Customer List</h3>
            {customerListData && customerListData.map((customer) => {
                return (
                    <p key={customer.id}><Link to={`/detail/${customer.id}`}>{customer.name}</Link></p>
                )
            })}
        </div>
    )
}
