import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron,Form,Button , Row , Col} from 'react-bootstrap';

import axios from 'axios';
import './create-book.css';



class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      subject:"",
      date:"",
      query:""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      subject: this.state.subject,
      date:this.state.date,      
      query: this.state.query
    };

    axios
      .post('http://localhost:2000/items', data)
      .then(res => {
        this.setState({
          subject:"",
          date:"",
          query:""
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
                <Jumbotron className="mt-3 add-new-ticket bg-light" style={{  width:"70%"}}>
            <h1 className="text-center text-success">ANY QUERY ??</h1>
            <hr/>
            <Form autoComplete="off" noValidate onSubmit={this.onSubmit} >
                <Form.Group as={Row}>
                    <Form.Label column sm={3} style={{fontSize:"20px"}}>Email</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    name="subject"
                    
                    placeholder="subject"
                    value={this.state.subject}
                    onChange={this.onChange}
                    required
                    /></Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label className="text-info" style={{fontSize:"20px"}} >Current Date</Form.Label>
                    <Col >
                    <Form.Control
                    width="25%"
                    name="date"
                    type="date"
                    value= {this.state.date}
                    placeholder="date"
                    onChange={this.onChange}
                    required
                    /></Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{marginLeft:"250px" , fontSize:"30px"}}>Query</Form.Label>
                    <Form.Control
                    name="query"
                    as="textarea"
                    value={this.state.query}
                    placeholder="enter your QUERY"
                    row="5"
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

export default CreateBook;