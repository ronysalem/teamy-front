
import React , {Component} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './signin.css'
import {Redirect} from 'react-router-dom';

class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            email: "",
            password:"",
            error: "",
            redirect:false,
            loading: false
        }
    }
    // function to change the state to whatever user types and to handle error property while using fixing error
    handleChange = inputType => event => {
        this.setState({error:""});
        this.setState({ [inputType]:event.target.value });
    }

    // function to authenticate
    authenticate = (jwt,next)=> {
        if(typeof window !== "undefiend"){
            // save token to localStorage and change redirectState to true 
            localStorage.setItem("jwt", JSON.stringify(jwt));
            next();
        }
    } 
      
    // function to get user info and store it in const
    clickSubmit= event =>{
        event.preventDefault();
        this.setState({loading:true});
        const{email,password}=this.state;
        const user ={     
            email,
            password
        }
        // sending data to sign in function
        this.singin(user)
        .then(data =>{
            if(data.error) {
                this.setState({error:data.error ,loading:false});
            } else {
                // authenticate the user
                this.authenticate(data, ()=>{
                    this.setState({redirect: true});
                });
            }
           
        })
    }

    // function to send user data to backend using post request
    singin = user=>{
        return fetch("http://localhost:8080/signin",{
             method: 'POST', 
             credentials: 'same-origin',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(user)
         })
         .then(response => {
             return response.json()
         })
         .catch(error => console.log(error))
    
     };


  
    // Function that returns form  
    signinForm=(email,password)=>(
          
        <form>
        {/* first row */}
        <div className="form-row">
        <div className="form-group col-md-10 off-set-md-auto">
            <label className="text-muted">Email</label>
            <input onChange={this.handleChange("email")}
             type="text"
             className="form-control inputbox"
             value={email}
              /> 
        </div>
        </div>
        {/* second row */}
        <div className="form-row">
            <div className="form-group col-md-10 off-set-md-auto">
            <label className="text-muted">Password</label>
            <input onChange={this.handleChange("password")}
            type="password"
            className="form-control inputbox"
            value={password}/> 
        </div>
        </div>

      {/* Third row */}
      <div className="form-row">
      <button onClick={this.clickSubmit} className="btn  btn-info">SignIn</button>
      
                 
                   
      </div>
       
    </form>
    )

    render(){
        const {email,password,error ,redirect,loading} = this.state
         if(redirect){
             return <Redirect to="/"/>
         }
        return(
            <div className="container">
                <h2 className="mt-5 mb-5">SignIn</h2>
                {/* ERROR alert goes here conditional rendering if there is error display it if not hide alert */}
                <div className="alert alert-danger" style={{display: error? "" : "none" }}> {error}</div>
                   
                {/* invoking Form method here*/}
                {this.signinForm(email,password)}
              
            </div>
        //  make conditional loader here ---
        );
    }
}

export default Signin ;