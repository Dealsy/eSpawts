import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button';
import Col from 'react-bootstrap/Col';
import './Accountsettings.scss';

export class AccountSettings extends Component {
    render() {
        return (
            <div className="AccountSettings">
                <Form className="FormStyle">
					<Form.Row>
						<Form.Group as={Col} controlId="formGridName">
							<Form.Label>Change Name:</Form.Label>
							<Form.Control placeholder="Your First Name" />
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Change Email:</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						</Form.Row>
						<Form.Row>
						<Form.Group as={Col} controlId="formGridAddress2">
							<Form.Label>Change Display Name:</Form.Label>
							<Form.Control placeholder="Your Display Name" />
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Change Password:</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
					</Form.Row>

					<Button className="loginScrOpts" variant="primary" type="submit">
						Submit
					</Button>
				</Form> 
            </div>
        )
    }
}

export default AccountSettings;
