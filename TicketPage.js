import React, { useState , useEffect } from 'react';
import {Container , Row , Col} from 'react-bootstrap';
import TicketForm from './TicketForm';
import axios from 'axios';





const TicketPage =()=>{

    const [postData , setPostData] = useState({
        subject:'', date:'' , detail:''
    });

    
    

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(postData);
        
        
        

        

        


    }
    

    
    

    return(
        <div className="p-age bg-info" style={{ display:"flex" ,justifyContent:"center" , alignItems:"center" }}>
            <Container >
            <Row>
                <Col>
                <TicketForm 
                
                postData={postData} 
                handleOnSubmit={handleSubmit}
                setPostData={setPostData}
                />
                </Col>
            </Row>
        </Container>

        </div>
        
    );
};
export default TicketPage;
