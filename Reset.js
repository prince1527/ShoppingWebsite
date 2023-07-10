import React from 'react';
import PropeTypes from 'prop-types';
import {Container, Row , Col , Form , Button} from 'react-bootstrap';

const Reset=({handleOnChange , email ,  handleOnSubmit , formSwitcher})=>{
    return<Container>
        <Row>
            <Col>
            <h1>Reset PASSWORD</h1>
            <hr/>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>enter email</Form.Label>
                    <Form.Control
                    name="email"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={handleOnChange}
                    required
                    />
                </Form.Group>
                
                <Button className="button btn-success" type="submit" >Reset</Button>
            </Form>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
            <a href="#" onClick={()=>formSwitcher('login')}>LOGIN NOW</a>
            </Col>
        </Row>
    </Container>
}

Reset.PropeTypes ={
    handleOnChange: PropeTypes.func.isRequired,
    handleOnSubmit: PropeTypes.func.isRequired,
    formSwitcher: PropeTypes.func.isRequired,
    email: PropeTypes.string.isRequired,
    
};

export default Reset;
