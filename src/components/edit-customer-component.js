// EditCustomer Component for update 

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerForm from "./customerForm";

// EditCustomer Component
const EditCustomer = (props) => {
const [formValues, setFormValues] = useState({
	name: "",
	email: "",
	
});
	
//onSubmit handler
const onSubmit = (CustomerObject) => {
	axios
	.put(
		"http://localhost:3000/customers/update-customer/" +
		props.match.params.id,
		CustomerObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Customer successfully updated");
		props.history.push("/customer-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize customer form
useEffect(() => {
	axios
	.get(
		"http://localhost:3000/customers/update-customer/"
		+ props.match.params.id
	)
	.then((res) => {
		const { name, email } = res.data;
		setFormValues({ name, email});
	})
	.catch((err) => console.log(err));
}, []);

// Return customer form
return (
	<CustomerForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Customer
	</CustomerForm>
);
};

// Export EditCustomer Component
export default EditCustomer;
