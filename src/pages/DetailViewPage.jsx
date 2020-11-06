import React, {useState, useEffect} from 'react'

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
        <div>
            <h2>detail</h2>
            {customerDetailData && (
                <>
                    <p>{customerDetailData.name}</p>
                    <p>{customerDetailData.organisationNr}</p>
                    <p>{customerDetailData.vatNr}</p>
                    <p>{customerDetailData.reference}</p>
                    <p>{customerDetailData.paymentTerm}</p>
                    <p>{customerDetailData.website}</p>
                    <p>{customerDetailData.email}</p>
                    <p>{customerDetailData.phoneNumber}</p>
                </>
            )}
        </div>
    )
}
