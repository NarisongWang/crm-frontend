import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AddTicketForm } from '../../component/add-ticket-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../component/breadcrumb/Breadcrumb.comp'

const initFrmData = {
    subject:"",
    issueDate:"",
    detail:""
}
export const AddTicket = () => {

    const [frmData, setFrmData] = useState(initFrmData);

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFrmData({
            ...frmData,
            [name]: value
        })
    }

    const handleOnSubmit = (e)=> {
        e.preventDefault();
        //console.log('Submit form data');
        //Submit frmData
    }

    return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Add New Ticket">
                </PageBreadcrumb>
            </Col>
        </Row>
        <Row>
            <Col>
                <AddTicketForm
                    frmData={frmData}
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                >
                </AddTicketForm>
            </Col>
        </Row>
    </Container>
    )
}
