import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse,Navbar,NavbarToggler,NavbarBrand, Nav,NavItem,NavLink,UncontrolledDropdown, DropdownToggle,DropdownMenu,DropdownItem,  NavbarText  } from 'reactstrap';


const NAV = () => {
  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/signin">Signin</Link>
    <Link to="/signup">signUp</Link>
  
  </div>
    );
}



export default NAV;
