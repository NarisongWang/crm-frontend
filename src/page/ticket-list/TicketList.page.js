import React, {useState} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'
import { TicketTable } from '../../component/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import { SearchForm } from '../../component/search-form/SearchForm.comp'
import { Link } from 'react-router-dom'

export const TicketList = () => {

    const [searchStr, setSearchStr] = useState('');
    const [dispTicket, setDispTicket] = useState(tickets);

    const handleOnChange =(e)=>{
        e.preventDefault();
        setSearchStr(e.target.value);
        searchTicket(e.target.value);
    }

    const searchTicket = (str) =>{
        const displayTicket = tickets.filter((row)=> row.subject.toLocaleLowerCase().includes(str.toLocaleLowerCase()));
        setDispTicket(displayTicket);
    }

    return (
    <Container>
        <Row>
            <Col><PageBreadcrumb page="Ticket List"></PageBreadcrumb></Col>
        </Row>
        <Row>
            <Col className='text-center mt-1 mb-3'>
                <Link to="/addticket">
                    <Button variant='info' style={{fontSize:'1.3rem','color':'white', padding:'10px 30px'}}>Add New Ticket</Button>
                </Link>
            </Col>
            <Col className='text-right mt-3'>
                <SearchForm 
                    handleOnChange={handleOnChange}
                    searchStr = {searchStr}
                />
            </Col>
        </Row>
        <Row>
            <Col className='recent-ticket'>
                <TicketTable tickets={dispTicket}></TicketTable>
            </Col>
        </Row>
    </Container>
    )
}
