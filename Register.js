import React,{Component} from 'react';
import state from 'state';


class Register extends Component {
    render(){
        state={
            Fname:"",
            Sname:"",
            email:"",
            Password:""
            
        };

        return(
           <div style={{backgroundColor:"lightgray" , width:"100%" , height:"1000px" , display:"flex"}}>
        <div style={{backgroundColor:"lightgray" , width:"500px" , height:"300px" ,  marginLeft:"500px"}}>
            <h1 style={{fontSize:"35px"}}><b/>Create a new account</h1>
            <h3 style={{color:"gray" ,fontSize:"24px"}}>It's quick and easy.</h3><br/><br/>
            
                <br/><br/>
                <form>
                <input  placeHolder="First name" name="Fname" value={this.state.Fname} style={{height:"30px", width:"150px" ,borderRadius:"5px"}}/>
            <input placeHolder="Surname" name="Sname" value={this.state.Sname} style={{height:"30px", width:"150px" , marginLeft:"30px" ,borderRadius:"5px"}}/>
            <br/><br/>
            
            <input placeHolder="Mobile number or email address" name="email" value={this.state.email} style={{height:"30px", width:"335px"  ,borderRadius:"5px"}}/>
            <br/><br/>
            <input placeHolder="New Password" name=""value={this.state.email} style={{height:"30px", width:"335px"  ,borderRadius:"5px"}}/>
            <br/><br/>
            <h3 style={{color:"gray"}}>Date of Birth</h3>
            <select name="Date" id="Date" width="10px" value={this.state.Date}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">3</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                
            </select>
            <select name="Month" id="Month" width="10px" value={this.state.Month}>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Api">Api</option>
                <option value="Mai">Mai</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="Aug">Aug</option>
                <option value="Sept">Sept</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
            </select>
            <select name="Year" id="Year" width="10px" value={this.state.Year}>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                </select>
                <br/><br/>
                <h3 style={{color:"gray"}}>Gender</h3>
                <div name="Gender">
                <input type="radio" value="Male" name="male" id="male"/>
                <label for="male">Male</label>
                <input type="radio" value="Female" name="Female" style={{marginLeft:"30px"}} id="female"/>
                <label for="Female">Female</label><br></br>

                </div>
                
                </form>
                

        </div>

    </div>
        )
    }

}
export default  Register;
