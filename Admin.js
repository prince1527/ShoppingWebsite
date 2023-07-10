import React, { Component } from 'react';
import { Jumbotron , Button , Row , Col , Form  } from 'react-bootstrap';

import axios from 'axios';

class Admin extends Component{

    render()
    {
        return(
            <div className="maa bg-info" style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100%" , marginBottom:"10px"}}>
                <Jumbotron className="bg-light" style={{width:"35%" , marginTop:"50px" , height:"40%"}}>
                    <h1 className="text-info text-center">Admin</h1>
                    <hr/>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>User Name</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                name="username"
                                placeholder="User Name"
                                
                                
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Password</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                name="password"
                                placeholder="Password"
                                type="Password"
                                
                                
                                />
                            </Col>
                        </Form.Group>
                        <Button className="button btn-success btn-outline-primary" type="submit" block  >Login</Button>
                    </Form>
                </Jumbotron>
            </div>
        )
    }
}
export default Admin;
