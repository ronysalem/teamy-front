import React ,{Component,useState} from 'react';
import {MenuItems} from './MenuItems';
import './navbar.css';
import Logo from '../navbar/logo.jpg';
import { Button } from '../button/Button-component';



class Navbar extends Component {
  // state for the drop down menu

  state={clicked: false};

handleCLick = ()=>{
  this.setState({clicked: !this.state.clicked});
}
  
  render (){
      return (
        <nav className="Navbar">
         <img className="logo-img" src={Logo}/> <h2 className="navbar-logo">Teamy </h2>
          <div className="menu-icon" onClick={this.handleCLick}>
            <i className={this.state.clicked? 'fas fa-times' :'fas fa-bars'}></i>
          </div>
          <ul  className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map( (item, index)=>{
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}</a>
                 </li>
                
              )
            })}
            <li>
            {/* <a href="#" onClick={()=>setOpen(!open)}> 
                {/*here goes the image of users& drop down menu*/}
                {/* <img className= "userIcon" src={Logo}></img>
            </a>
             */}
                
            
               </li>
             
          </ul>
          <Button className="signupBtn">Sign up</Button>
        </nav>
      );
    }
}

export default Navbar;
