import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux'
import axios from'axios'
import './Form.css'
import { ToastContainer, toast } from 'react-toastify';
class Form extends Component {

    state={
        fullname:'',
        number:'',
        email:'',
        message:''
    }
    SendInfo=()=>{
        const data = {
            fullname:this.state.fullname,
            number:this.state.number,
            email:this.state.email,
            message:this.state.message
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',data).then(response =>{
            console.log(response)
            //console.log(data.fullname)
            const name = data.fullname
            toast(<div><span className="FormFullName">{name}</span> Your Meassage Successfully Send. For conformation please Check Console</div>);
        })
    }


    render(){
        return(
            <Aux>
            <div className="row">
                <div className="col-lg-8 mb-4">
                <h3>Send us a Message</h3>
                    <div className="control-group form-group">
                    <div className="controls">
                        <label>Full Name:</label>
                        <input type="text" value={this.state.fullname} onChange={(event)=>this.setState({fullname:(event.target.value)})}  className="form-control" id="name" required data-validation-required-message="Please enter your name."/>
                        <p className="help-block"></p>
                    </div>
                    </div>
                    <div className="control-group form-group">
                    <div className="controls">
                        <label>Phone Number:</label>
                        <input type="tel" value={this.state.number} onChange={(event)=>this.setState({number:(event.target.value)})}  className="form-control" id="phone" required data-validation-required-message="Please enter your phone number."/>
                    </div>
                    </div>
                    <div className="control-group form-group">
                    <div className="controls">
                        <label for="inputEmail4">Email Address:</label>
                        <input type="email"  aria-describedby="emailHelp" value={this.state.email} onChange={(event)=>this.setState({email:(event.target.value)})}  className="form-control"  id="inputEmail4" required data-validation-required-message="Please enter your email address."/>
                    </div>
                    </div>
                    <div className="control-group form-group">
                    <div className="controls">
                        <label>Message:</label>
                        <textarea rows="10" cols="100" value={this.state.message} onChange={(event)=>this.setState({message:(event.target.value)})}  className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength="999" style={{resize:"none"}}></textarea>
                    </div>
                    </div>
                    <div id="success"></div>
                    <button type="submit" onClick={this.SendInfo} className="btn btn-primary" id="sendMessageButton">Send Message</button>
                    <ToastContainer />
                </div>

            </div>
            </Aux>
        )
    }
}

export default Form