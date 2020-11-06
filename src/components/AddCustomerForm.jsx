import React from 'react'

export default function AddCustomerForm() {

    const addCustomerURL = 'https://frebi.willandskill.eu/api/v1/customers'

    function submitCustomer(e) {
        e.preventDefault()
        const payload = {
            name: e.target.name.value,
            organisationNr: e.target.organisationNr.value,
            vatNr: e.target.vatNr.value,
            reference: e.target.reference.value,
            paymentTerm: parseInt(e.target.paymentTerm.value),
            website: e.target.website.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNr.value
        }
        console.log(payload)
        fetch(addCustomerURL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('loginToken')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => console.log(res))
    }

    return (
        <>
            <h5>add New customer</h5>
            <form onSubmit={submitCustomer}>
                <div className='form-group'>
                    <label>Name:</label>
                    <input type="text" name='name' />
                </div>
                <div className='form-group'>
                    <label>OrganisationNr:</label>
                    <input type="text" name='organisationNr' />
                </div>
                <div className='form-group'>
                    <label>vatNr:</label>
                    <input type="text" name='vatNr' />
                </div>
                <div className='form-group'>
                    <label>reference:</label>
                    <input type="text" name='reference' />
                </div>
                <div className='form-group'>
                    <label>paymentTerm:</label>
                    <input type="text" name='paymentTerm' />
                </div>
                <div className='form-group'>
                    <label>website:</label>
                    <input type="text" name='website' />
                </div>
                <div className='form-group'>
                    <label>email:</label>
                    <input type="email" name='email' />
                </div>
                <div className='form-group'>
                    <label>phoneNr:</label>
                    <input type="text" name='phoneNr' />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-primary'>Add</button>
                </div>
            </form>

        </>
    )
}
