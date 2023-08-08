// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch,Routes,
	Route, Link } from "react-router-dom";

// Import other React Component
import CreateCustomer from
	"./components/create-customer-component";
import EditCustomer from
	"./components/edit-customer-component";
import CustomerList from
	"./components/customer-list-component";
// import EditCustomer from "./components/edit-customer-component";
// import CustomerList from "./components/customer-list-component";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-customer"}
				className="nav-link">
				React MERN Stack App
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-customer"}
					className="nav-link">
					Create Customer
				</Link>
				</Nav>

				<Nav>
				<Link to={"/customer-list"}
					className="nav-link">
					Customer List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Switch>
				<Route exact path="/"
					component={CreateCustomer} />
				<Route path="/create-customer"
					component={CreateCustomer} />
				<Route path="/edit-customer/:id"
					component={EditCustomer} />
				<Route path="/customer-list"
					component={CustomerList} />
				</Switch>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
