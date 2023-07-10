import React from 'react';
import { Container , Row, Col , Button} from 'react-bootstrap';
import TicketTable from './TicketTable';


const Dashbord =()=>{
    return (
        <Container>
            <Row>
            
                <Col className="text-center mt-5 mb-2">
                <Button className="button btn-info" style={{padding:"10px 30px" ,color:"white" , fontSize:"25px"}}>Add New Ticket</Button>
                </Col>
            </Row>
            <Row>
            
                <Col className="text-center mt-5 mb-2">
                    <div>tickets sold:50</div>
                    <div>pending ticket:20</div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div>Recently added ticket</div>
                <br/>
                <TicketTable/>
                </Col>
            
            
            </Row>
        </Container>
    );
};
export default Dashbord;
