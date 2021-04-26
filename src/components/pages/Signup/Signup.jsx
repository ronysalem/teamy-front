
import React , {Component} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css'

class Signup extends React.Component{
    constructor(){
        super();
        this.state={
            name: "",
            email: "",
            password: "",
            age:"",
            job:"",
            bio:"",
            faculty:"",
            univeristy:"",
            country:"",
            city:"",
            phone:"",
            error: "",
            accountCreated:false
        }
    }
    // function to change the state to whatever user types and to handle error property while using fixing error
    handleChange = inputType => event => {
        this.setState({error:""});
        this.setState({ [inputType]:event.target.value });
    }
      
    // function to get user info and store it in const
    clickSubmit= event =>{
        event.preventDefault();
        const{name,email,password,age,job,bio,faculty,univeristy,country,city,phone}=this.state;
        const user ={
            name,
            email,
            password,
            age,
            job,
            bio,
            faculty,
            univeristy,
            country,
            city,
            phone
        }
        console.log(user);
        // sending data to sign up function
        this.singup(user)
        .then(data =>{
            if(data.error) this.setState({error:data.error});
            else this.setState({
                error:"",
                name:"",
                email:"",
                password:"",
                age:"",
                job:"",
                bio:"",
                faculty:"",
                univeristy:"",
                country:"",
                city:"",
                phone:"", 
                accountCreated:true
            });
        })
    }

    // function to send user data to backend using post request
    singup = user=>{
        return fetch("http://localhost:8080/signup",{
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
    signupForm=(name,email,password,age,job,bio,faculty,univeristy,country,city,phone)=>(
          
        <form>
        {/* first row */}
        <div className="form-row">
        <div className="form-group col-md-5">
            <label className="text-muted">Name</label>
            <input onChange={this.handleChange("name")}
             type="text"
             className="form-control inputbox"
             value={name}
              /> 
        </div>
        <div className="form-group offset-md-1 col-md-5">
            <label className="text-muted">Email</label>
            <input onChange={this.handleChange("email")} 
            type="email"
            className="form-control inputbox"
            value={email}
            /> 
        </div>
        </div>
        {/* second row */}
        <div className="form-row">
            <div className="form-group col-md-5">
            <label className="text-muted">Password</label>
            <input onChange={this.handleChange("password")}
            type="password"
            className="form-control inputbox"
            value={password}/> 
        </div>
        <div className="form-group offset-md-1 col-md-5">
            <label className="text-muted">Age</label>
            <input onChange={this.handleChange("age")}
            type="text"
            className="form-control inputbox"
            value={age}
            /> 
        </div>
        </div>
         {/* third row */}
         <div className="form-row">
         <div className="form-group col-md-5">
            <label className="text-muted">Job</label>
            <input onChange={this.handleChange("job")}
            type="text"
            className="form-control inputbox"
            value={job}
            /> 
        </div>
        <div className="form-group  offset-md-1 col-md-5">
            <label className="text-muted ">Bio</label>
            <input onChange={this.handleChange("bio")}
            type="text"
            className="form-control inputbox"
            value={bio}
            /> 
        </div>
         </div>
        {/* fourth row */}
        <div className="form-row">
        <div className="form-group col-md-5">
            <label className="text-muted">faculty</label>
            <input onChange={this.handleChange("faculty")}
            type="text"
            className="form-control inputbox"
            value={faculty}
            /> 
        </div>
        <div className="form-group offset-md-1 col-md-5">
            <label className="text-muted">Univeristy</label>
            <input onChange={this.handleChange("univeristy")}
            type="text"
            className="form-control inputbox"
            value={univeristy}
            /> 
        </div>
        </div>
        {/* fifth row */}
        <div className="form-row">
        <div className="form-group col-md-5">
            <label className="text-muted">Country</label>
            <input onChange={this.handleChange("country")}
            type="text"
            className="form-control inputbox"
            value={country}
            /> 
        </div>
    
        <div className="form-group offset-md-1 col-md-5">
            <label className="text-muted">City</label>
            <input onChange={this.handleChange("city")}
            type="text"
            className="form-control inputbox"
            value={city}
            /> 
        </div>
        </div>
          {/* sixth row */}
          <div className="form-row">
          <div className="form-group col-md-5">
            <label className="text-muted">Phone</label>
            <input onChange={this.handleChange("phone")}
            type="text"
            className="form-control inputbox"
            value={phone}
            /> 
        </div>
          </div>
     
      {/* seventh row */}
      <div className="form-row">
      <button onClick={this.clickSubmit} className="btn  btn-info">Signup</button>
      <a href="/user/login" class="btn btn-link">   Already have an account? </a>
                 
                   
      </div>
       
    </form>
    )

    render(){
        const {name,email,password,age,job,bio,faculty,univeristy,country,city,phone,error,accountCreated} = this.state
        return(
            <div className="container">
                <h2 className="mt-5 mb-5">SignUp</h2>
                {/* ERROR alert goes here conditional rendering if there is error display it if not hide alert */}
                <div className="alert alert-danger" style={{display: error? "" : "none" }}> {error}</div>

                 {/* SUCESS alert goes */}
                 <div className="alert alert-info" style={{display: accountCreated? "" : "none"}}> New account is successfully created.please Sign in</div>
                   
                {/* invoking Form method here*/}
                {this.signupForm(name,email,password,age,job,bio,faculty,univeristy,country,city,phone)}
              
            </div>
        );
    }
}

export default Signup ;