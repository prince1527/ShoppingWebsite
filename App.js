import logo from './logo.svg';
import React,{useState} from 'react';




import './App.css';

import Layout from './components/Layout'
import Dashbord from './components/Dashbord';
import './App.css';
import TicketTable from './components/TicketTable';
import Logggin from './components/Logggin';
import TicketForm from './components/TicketForm';
import TicketPage from './components/TicketForm';
import TicketListing from './components/TicketListing';
import Wellness from './components/components/Wellness';
import Skincare from './components/components/Skincare';
import Color from './components/components/Color';
import BootstrapCarouselComponent from './components/components/BootstrapCarouselComponent';
import CreateBook from './CreateBook';
import SignIn from './SignIn';
import Admin from './Admin';



import {
  BrowserRouter as Router,
  Switch ,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return(
    <div className="App">
      <Router>
        <Switch>
          

          
          <Layout>
            <div>
            <Route exact path="/"><BootstrapCarouselComponent/></Route>
            <Route path="/admin"><Admin/></Route>
            
            <Route path="/Color"><Color/></Route>
             <Route path="/Skin care"><Skincare/></Route>
            <Route path="/Wellness"><Wellness/></Route>
            <Route path="/Query"><CreateBook/></Route>
            </div>
            <br/><br/>
            <br/>
            
            
          </Layout>
        

        </Switch>
      

      </Router>
      
      
    </div>
  );
  
 
}


export default App;


