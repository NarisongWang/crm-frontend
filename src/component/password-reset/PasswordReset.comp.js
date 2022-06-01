import React from 'react'
import '../../page/entry/entry.style.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import propTypes from 'prop-types';

export const PasswordReset = ({handleOnChange, handleOnResetSubmit, frmSwitch, email}) => {
    return (
    <Container>
        <Row>
            <Col>
                <h1 className='client-login'>Reset Password</h1>
                <hr />
                <Form onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            onChange={handleOnChange}
                            value={email}
                            placeholder='Enter Email'
                            required    
                            >
                        </Form.Control>
                    </Form.Group>
                    <hr />
                    <Button type='submit'>Reset Password</Button>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='/#' onClick={()=>frmSwitch('login')}>Login Now</a>
            </Col>
        </Row>
    </Container>
    )
}

PasswordReset.propTypes = {
    handleOnChange:propTypes.func.isRequired,
    handleOnSubmit:propTypes.func.isRequired,
    frmSwitch:propTypes.func.isRequired,
    email:propTypes.string.isRequired
}