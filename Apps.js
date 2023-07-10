import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron,Form,Button , Row , Col} from 'react-bootstrap';
import axios from 'axios';



export default class Apps extends Component{
    constructor(props){
        super(props);
        this.state ={
            subject: '',
            date: '',
            detail: '',

        }

        this.validateform = this.validateform.bind(this);
    }
    validateform(){
        console.log('');
    }

        

        
    
    

        

    }
    render(){
        return(
            <div>
                <Jumbotron className="mt-3 add-new-ticket bg-light" >
            <h1 className="text-center text-success">ANY QUERY ??</h1>
            <hr/>
            <Form autoComplete="off" onSubmit={this.onSubmit} >
                <Form.Group as={Row}>
                    <Form.Label column sm={3} style={{fontSize:"20px"}}>Email</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    name="subject"
                    
                    placeholder="subject"
                    value={this.state.subject}
                    onChange={this.onChangesubject}
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
                    onChange={this.onChangedate}
                    required
                    /></Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{marginLeft:"250px" , fontSize:"30px"}}>Query</Form.Label>
                    <Form.Control
                    name="detail"
                    as="textarea"
                    value={this.state.detail}
                    placeholder="enter your QUERY"
                    row="5"
                    onChange={this.onChangedetail}
                    required
                    />
                </Form.Group>
                <Button className="button btn-success btn-outline-primary" type="submit" block onClick={this.onSubmit} >submit</Button>
            </Form>
        </Jumbotron>
            </div>
        )
            
        
    }
}
