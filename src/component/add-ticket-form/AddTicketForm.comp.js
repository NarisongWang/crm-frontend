import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './addNewTicket.style.css'

export const AddTicketForm = ({handleOnChange, handleOnSubmit, frmData}) => {
  return (
    <div className='jumbotron'>
        <Form onSubmit={handleOnSubmit}>
            <Form.Group className='mb-3' as={Row}>
                <Form.Label  column sm={3}>Subject</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        name='subject'
                        value={frmData.subject}
                        onChange={handleOnChange}
                        autoComplete='off'
                        placeholder='Enter Subject'
                        required    
                        >
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group className='mb-3' as={Row}>
                <Form.Label column sm={3}>Issue Date</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type='date'
                        name='issueDate'
                        value={frmData.issueDate}
                        onChange={handleOnChange}
                        autoComplete='off'
                        required    
                        >
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group>
                <Form.Label className='ms-1'>Detail</Form.Label>
                <Form.Control
                    as='textarea'
                    rows='5'
                    name='detail'
                    value={frmData.detail}
                    onChange={handleOnChange}
                    autoComplete='off'
                    required    
                    >
                </Form.Control>
            </Form.Group>
            <hr />
            <Button type='submit'>Add New Ticket</Button>
        </Form>
    </div>
  )
}
