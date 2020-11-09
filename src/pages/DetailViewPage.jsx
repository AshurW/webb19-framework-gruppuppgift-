import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const StyledDetailInfo = styled.div `
    margin: 2rem auto;
    width: 50%;
    border-radius: 7px;
    border: 2px solid black;
    padding: 0.3rem;
    background-color: CornflowerBlue;
    text-align: center;
`

export default function DetailViewPage(props) {

    const [customerDetailData, setCustomerDetailData] = useState(null)
    const userId = props.match.params.id
    const customerDetailURL = `https://frebi.willandskill.eu/api/v1/customers/${userId}/`

    function fetchCustomerDetail() {
        fetch(customerDetailURL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('loginToken')}`
            } 
        })
        .then(res => res.json())
        .then(data => setCustomerDetailData(data))
    }

    useEffect(() => {
        fetchCustomerDetail()
    }, [])

    return (
        <div className='container'>
            {customerDetailData && (
                <StyledDetailInfo>
                    <h2>{customerDetailData.name} Detail Page</h2>
                    <p>OrganisationNr: {customerDetailData.organisationNr}</p>
                    <p>VatNr: {customerDetailData.vatNr}</p>
                    <p>Reference: {customerDetailData.reference}</p>
                    <p>PaymentTerm: {customerDetailData.paymentTerm}</p>
                    <p>Website: {customerDetailData.website}</p>
                    <p>Email: {customerDetailData.email}</p>
                    <p>PhoneNumber: {customerDetailData.phoneNumber}</p>
                </StyledDetailInfo>
            )}
        </div>
    )
}
