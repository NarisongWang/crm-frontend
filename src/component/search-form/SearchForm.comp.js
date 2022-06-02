import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export const SearchForm = ({handleOnChange, searchStr}) => {
  return (
    <Form>
        <Form.Group as={Row}>
            <Form.Label column sm='3'>
                Search:
            </Form.Label>
            <Col sm='9'>
                <Form.Control 
                    name='searchStr' 
                    value={searchStr}
                    onChange={handleOnChange}
                    placeholder='Search ...'>
                </Form.Control>
            </Col>
        </Form.Group>
    </Form>
  )
}
