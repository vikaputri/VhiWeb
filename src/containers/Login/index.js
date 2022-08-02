import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Message from "../Message";

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email : '' ,
      password : '',
      redirectToReferrer : false,
      pagenotfound : false
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  
  handleSubmit(event){
    event.preventDefault();
    const user = {
      email : this.state.email,
      password : this.state.password
    };
    
    if(this.state.email && this.state.password){
      axios.post(`https://reqres.in/api/login`,user)
      .then((response) => { 
        let userresponse = response;
        console.log(userresponse.data);
        if(userresponse){
          sessionStorage.setItem('data',JSON.stringify(userresponse));
          this.setState({redirectToReferrer: true});
        }
      },this)
      .catch((error) => {
        if (error.response.status === 400){
          this.setState({ errorMessage: "Email/Password Salah" });
        }
        else{
          this.setState({pagenotfound: true});
        }
      });          
    }
  }

  render(){
    const { errorMessage } = this.state;
    if (this.state.redirectToReferrer){
      return (<Redirect to={'/user'}/>)
    }

    if (this.state.pagenotfound){
      return (<Redirect to={'/404page'}/>)
    }
    
    if (sessionStorage.getItem('data')){
      return (<Redirect to={'/user'}/>)
    }

    return(
            <section class="py-5">
              <div class="container px-5 py-5">
                <div class="row justify-content-center">
                  <div class="col-lg-6">
                    {errorMessage ? <Message variant="danger" msg={errorMessage}/> : null}
                    <div class="card">
                      <form class="bg-primary py-5 px-5 text-white" ref="formdemo" onSubmit={this.handleSubmit}>
                        <h2 class="fw-bolder text-center mb-3">Login</h2>
                        <div class="form-group mb-3">
                          <label class="mb-1">Email</label>
                          <input type="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Enter Your Email" required/>
                        </div>
                        <div className="form-group mb-3">
                          <label class="mb-1">Password</label>
                          <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Enter Your Password" required/>
                        </div>
                        <button type="submit" value="Kirim" class="btn btn-light">Login</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    )
  }
}

export default Login;