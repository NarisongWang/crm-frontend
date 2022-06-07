import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { TicketTable } from '../../component/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col><PageBreadcrumb page="Dashboard"></PageBreadcrumb></Col>
        </Row>
        <Row>
            <Col className='text-center mt-1 mb-3'>
                <Link to="/addticket">
                    <Button variant='info' style={{fontSize:'1.3rem','color':'white', padding:'10px 30px'}}>Add New Ticket</Button>
                </Link>
            </Col>
            <Col className='text-center mt-2 mb-1'>
                <div>Total tickets:50</div>
                <div>Pending tickets:30</div>
            </Col>
        </Row>
        <Row>
            <Col className='recent-ticket'>
                <TicketTable tickets={tickets}></TicketTable>
            </Col>
        </Row>
    </Container>
  )
}
