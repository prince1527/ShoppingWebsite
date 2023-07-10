import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CreateBook from './CreateBook';
import App from './App';
import Mom from './mom';
import Fb from './Fb';
import Register from './Register';
import Header from './components/Header';
import Layout from './components/Layout';
import BootstrapCarouselComponent from './components/components/BootstrapCarouselComponent.js'

import  "bootstrap/dist/css/bootstrap.min.css";
//import reportWebVitals from './reportWebVitals'
import LogoImage from './the.jpg';




ReactDOM.render(
  <React.StrictMode>
    
    <div style={{height:"110vh", width:"100%" , textAlign:"center" ,backgroundImage: `url(${LogoImage})` , backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition: "center"}}>
      <Mom/>
    </div>
    

    
  
   
   
  
      
    

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
