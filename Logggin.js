import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import Login from './Login';

import Reset from './Reset';
import {Jumbotron} from "react-bootstrap"

const Logggin=()=>{
    
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [frmLoad , setFrmLoad] = useState('login');

  const handleOnChange = (e) =>{
    const { name , value} = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    console.log(name, value);

  };
  const handleOnSubmit =(e) =>{
    e.preventDefault();

    if (!email || !password) {
      alert("fill")
    }
  };
  const formSwitcher = (frmType) =>{
    setFrmLoad(frmType);
  };

  return (
    <div  className=" entry-page bg-info" style={{height:"100vh" ,display:"flex" ,justifyContent:"center" , alignItems:"center" }}>
      <Jumbotron className="form text-center" style={{width:"400px" }} >
        {frmLoad === 'login' && (
          <Login
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          formSwitcher = {formSwitcher}
          email={email}
          pass={password}
        
        />
        )}
        {frmLoad === 'reset' && (
          <Reset
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          formSwitcher = {formSwitcher}
          email={email}
        />
        )}


      </Jumbotron>
      
      
    </div>
    )
}
export default Logggin;
