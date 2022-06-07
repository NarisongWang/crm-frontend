import React from 'react'
import { Form, Button } from 'react-bootstrap'

export const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        {/* <Form.Label>Reply</Form.Label> */}
        <Form.Text>Please reply your message here</Form.Text>
        <Form.Control
            as="textarea"
            value={msg}
            onChange={handleOnChange}
            row="5"
            name="detail"
        >
        </Form.Control>
        <Button
            className='mt-2'
            variant='info'
            type="submit"
        >Reply</Button>
    </Form>
  )
}
