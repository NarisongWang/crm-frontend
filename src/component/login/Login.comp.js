import React from 'react'
import '../../page/entry/entry.style.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import propTypes from 'prop-types';

export const Login = ({handleOnChange, handleOnSubmit, frmSwitch, email, password}) => {
    return (
    <Container>
        <Row>
            <Col>
                <h1 className='client-login'>Client Login</h1>
                <hr />
                <Form onSubmit={handleOnSubmit}>
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
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            name='password'
                            value={password}
                            onChange={handleOnChange}
                            placeholder='Enter Password'
                            autoComplete='off'
                            required    
                            >
                        </Form.Control>
                    </Form.Group>
                    <hr />
                    <Button type='submit'>Login</Button>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='/#' onClick={()=>frmSwitch('reset')}>Forget Password?</a>
            </Col>
        </Row>
    </Container>
    )
}

Login.propTypes = {
    handleOnChange:propTypes.func.isRequired,
    handleOnSubmit:propTypes.func.isRequired,
    frmSwitch:propTypes.func.isRequired,
    email:propTypes.string.isRequired,
    password:propTypes.string.isRequired
}