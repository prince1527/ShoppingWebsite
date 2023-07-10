import React from 'react';
import PropeTypes from 'prop-types';
import {Container, Row , Col , Form , Button} from 'react-bootstrap';

const Login=({handleOnChange , email , pass , handleOnSubmit , formSwitcher})=>{
    return<Container>
        <Row>
            <Col>
            <h1>USER LOGIN</h1>
            <hr/>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control
                    name="email"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={handleOnChange}
                    required
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Enter Your Query</Form.Label>
                    <Form.Control
                    name="password"
                    type="Password"
                    row="10"
                    value= {pass}
                    placeholder="your query"
                    onChange={handleOnChange}
                    required
                    />
                </Form.Group>
                <Button className="button btn-success" type="submit" >Login</Button>
            </Form>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
            <a href="#" onClick={()=>formSwitcher('reset')}>forget Password</a>
            </Col>
        </Row>
    </Container>
}

Login.PropeTypes ={
    handleOnChange: PropeTypes.func.isRequired,
    handleOnSubmit: PropeTypes.func.isRequired,
    formSwitcher: PropeTypes.func.isRequired,
    email: PropeTypes.string.isRequired,
    pass: PropeTypes.string.isRequired,
};    

export default Login;
