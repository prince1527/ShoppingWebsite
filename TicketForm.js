import React from 'react';
import {Jumbotron,Form,Button , Row , Col} from 'react-bootstrap';
import PropeTypes from 'prop-types';
import './add-new-ticket.css'
import Axios from 'axios';


class TicketForm extends React.Component
{
    state={
        subject:'',
        date:'',
        detail:''
    }
    handleChange=(e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=()=>{
        if (this.setState.subject!='' && this.setState.date!='' , this.setState!='')
        {
            Axios.post('http://localhost:6000/Query',this.state)
            .then(res=>{
                console.log('query submitted');
                console.log(this.state);
                this.setState({subject:'', date:'',detail:''});
            });
        }

    }




    render()
    {
        return(
            <div className="ms bg-info" style={{display:"flex" ,justifyContent:"center" , alignItems:"center" }}>
                <Jumbotron className="mt-3 add-new-ticket bg-light" style={{  width:"70%"}}>
            <h1 className="text-center text-success">ANY QUERY ??</h1>
            <hr/>
            <Form autoComplete="off" onSubmit={()=>this.handleSubmit()} >
                <Form.Group as={Row}>
                    <Form.Label column sm={3} style={{fontSize:"20px"}}>Email</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    name="subject"
                    
                    placeholder="subject"
                    value={this.setState.subject}
                    onChange={(e)=>{this.handleChange(e)}}
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
                    value= {this.setState.date}
                    placeholder="date"
                    onChange={(e)=>{this.handleChange(e)}}
                    required
                    /></Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{marginLeft:"250px" , fontSize:"30px"}}>Query</Form.Label>
                    <Form.Control
                    name="detail"
                    as="textarea"
                    value={this.setState.detail}
                    placeholder="enter your QUERY"
                    row="5"
                    onChange={(e)=>{this.handleChange(e)}}
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
export default TicketForm;


