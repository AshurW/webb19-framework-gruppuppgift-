import React, { useEffect, useContext } from 'react'
import AddCustomerForm from './AddCustomerForm'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CustomerContext } from '../contexts/CustomerContext';

const StyledCustomer = styled.div `
    margin: 1rem auto;
    border-radius: 7px;
    border: 2px solid black;
    padding: 0.3rem;
    background-color: CornflowerBlue;
    text-align: center;
    width: 50%;
`


export default function CustomerList() {
    const { customerListData, setCustomerListData } = useContext(CustomerContext)
    const customerListURL = 'https://frebi.willandskill.eu/api/v1/customers'
    

    function fetchCustomerList() {
        if(!customerListData) {
            fetch(customerListURL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('loginToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setCustomerListData(data.results))
        }
    }

    useEffect(() => {
        fetchCustomerList()
    }, [])



    return (
        <div>
            <h3>Customer List</h3>
                {customerListData && customerListData.map((customer) => {
                    return (
                        <StyledCustomer key={customer.id}><Link to={`/detail/${customer.id}`} style={{textDecoration: 'none', color: 'black'}}>{customer.name}</Link></StyledCustomer>
                    )
                })}
            <AddCustomerForm />
        </div>
    )
}
