// CreateCustomer Component for add new 

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import CustomerForm from "./customerForm";

// CreateCustomer Component
const CreateCustomer = () => {
const [formValues, setFormValues] =
	useState({ name: '', email: ''})
// onSubmit handler
const onSubmit = CustomerObject => {
	axios.post(
'http://localhost:3000/customers/create-customer',
	CustomerObject)
	.then(res => {
		if (res.status === 200)
		alert('Customer successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return Customer form
return(
	<CustomerForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Customer
	</CustomerForm>
)
}

// Export CreateCustomer Component
export default CreateCustomer
