import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import { MessageHistory } from '../../component/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../component/update-ticket/UpdateTicket.comp';

//const ticket = tickets[0];
export const Ticket = () => {
  const tid = useParams().tid;
  
  const [message, setMessage] = useState('');
  const [ticket, setTicket] = useState('');

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id === tid) {
        setTicket(tickets[i]);
        continue;
      }
      
    }
  }, [message, tid])
  

  const handleOnChange = (e) =>{
    setMessage(e.target.value);
  }

  const handleOnSubmit = (e) =>{
    //TODO
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className='text-weight-bolder text-secondary'>
          <div className='subject'>Subject: {ticket.subject}</div>
          <div className='date'>Date: {ticket.addedAt}</div>
          <div className='subject'>Status: {ticket.status}</div>
        </Col>
        <Col className='text-right'>
          <Button variant='info'>Close Ticket</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          ></UpdateTicket>
        </Col>
      </Row>
    </Container>
  )
}