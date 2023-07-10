import React, { useState , useEffect } from 'react';
import {Container , Row ,Col ,Button} from 'react-bootstrap';
import SearchForm from './SearchForm';
import TicketTable from './TicketTable';





const TicketListing=()=>{
    const [str , setStr] = useState("");

    useEffect(() => {}, [str]);

    const handleOnChange =(e) =>{
        setStr(e.target.value);
    };
    return(
        <Container>
            <br/>
            <Row>
                <Col>
                <Button varient="success">add new ticket</Button>
                </Col>
                <Col className="text-right">
                <SearchForm handleOnChange={handleOnChange} str={str}/>
                </Col>
            </Row>
            <hr/>
            <br/>
            <Row>
                <Col>
                <TicketTable/>
                </Col>
            </Row>

        </Container>
    );
};
export default TicketListing;
