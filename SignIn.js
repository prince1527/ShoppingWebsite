import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron,Form,Button , Row , Col} from 'react-bootstrap';

import axios from 'axios';
import './signin.css';



class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username:"",
      password:""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      username: this.state.username,   
      password: this.state.password
    };

    axios
      .post('http://localhost:2000/items', data)
      .then(res => {
        this.setState({
          username:"",
          password:""
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  };

  render()
    {
        return(
            <div className="ms bg-info" style={{display:"flex" ,justifyContent:"center" , alignItems:"center" }}>
                <Jumbotron className="mt-3 sign-in bg-light" style={{  width:"70%"}}>
            <h1 className="text-center text-success">Admin Sign IN</h1>
            <hr/>
            <Form autoComplete="off" noValidate onSubmit={this.onSubmit} >
                <Form.Group as={Row}>
                    <Form.Label column sm={3} style={{fontSize:"20px"}}>UderName</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    name="username"
                    
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.onChange}
                    required
                    /></Col>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label style={{marginLeft:"250px" , fontSize:"30px"}}>Password</Form.Label>
                    <Form.Control
                    name="password"
                    as="textarea"
                    type="Password"
                    value={this.state.password}
                    placeholder="enter your QUERY"
                    
                    onChange={this.onChange}
                    required
                    />
                </Form.Group>
                <Button className="button btn-success btn-outline-primary" type="submit" block  >submit</Button>
            </Form>
        </Jumbotron>
            </div>
        )
    }
}

export default SignIn;
