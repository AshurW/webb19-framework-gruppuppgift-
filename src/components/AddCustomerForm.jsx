import React from 'react'
import styled, { css } from 'styled-components'


const StyledForm = styled.form `
    border-radius: 7px;
    border: 2px solid black;
    padding: 2rem;
    background-color: CadetBlue
`
const StyledDiv = styled.div `
    border-radius: 7px;
    border: 2px solid black;
    padding: 2rem;
    background-color: CornflowerBlue;
    text-align: center;

`
const StyledInput = styled.input `
    border-radius: 7px;
    border: 2px solid black;
    padding: 1rem;
    background-color: CadetBlue;
    width: 100%;
    text-align: center;

    ${props => props.required && css`   
        font-size: 4rem;
    `}
    
`
const StyledButton = styled.button `
    border-radius: 7px;
    border: 2px solid black;
    padding: 1rem;
    background-color: cadetBlue;
    width: 100%;
    color:black;
`
   
const RequiredField = styled(StyledInput)`
    border: 2px solid darkred;
`
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
            <StyledForm onSubmit={submitCustomer}>
                <StyledDiv className='form-group'>
                    <label><strong>Name:</strong></label>
                    <RequiredField type="text" name='name' />
                </StyledDiv>
                <StyledDiv className='form-group'>
                    <label><strong>OrganisationNr:</strong></label>
                    <StyledInput type="text" name='organisationNr' />
                </StyledDiv>
                <StyledDiv className='form-group'>
                    <label><strong>vatNr:</strong></label>
                    <StyledInput type="text" name='vatNr' />
                </StyledDiv>
                <StyledDiv className='form-group'>
                    <label><strong>reference:</strong></label>
                    <StyledInput type="text" name='reference' />
                </StyledDiv>
                <StyledDiv className='form-group'>
                    <label><strong>paymentTerm:</strong></label>
                    <StyledInput type="text" name='paymentTerm' />
                </StyledDiv>
                <StyledDiv className='form-group'>
                    <label><strong>website:</strong></label>
                    <StyledInput type="text" name='website' />
                </StyledDiv>
                <StyledDiv className='form-group'>
                    <label><strong>email:</strong></label>
                    <StyledInput type="email" name='email' />
                </StyledDiv>
                <StyledDiv className='form-group'>
                    <label><strong>phoneNr:</strong></label>
                    <StyledInput type="text" name='phoneNr' />
                </StyledDiv>
                <StyledDiv className="form-group">
                    <StyledButton type="submit" className='btn btn-primary'><strong>Add</strong></StyledButton>
                </StyledDiv>
            </StyledForm >

        </>
    )
}
