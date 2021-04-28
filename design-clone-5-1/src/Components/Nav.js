import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
        menuOpen: false
    };
  }

  handleClick = () => {
      this.setState ({menuOpen: !this.state.menuOpen}) 
  }

  render() {
      const menuClass = this.state.menuOpen ? 'menu-open' : ''
      
    return <div className="navBar">

        <h1 className="start-icon">Start Bootstrap</h1>
 
            <ul className = "list">
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
        </ul>
        
        
        <button className= "menu-button" onClick={this.handleClick} >MENU
        <img
          className="hamburger"
          src="https://cdn.shopify.com/s/files/1/2384/0833/t/54/assets/hamburgerIconWhite3.png?v=16889458422340259745"
          alt="hamburger_menu"
        ></img>
        </button>
       
        <menu className={menuClass} style={{overflow: 'hidden'}}>
        <ul className = "menu-list">
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
        </ul>
        </menu>

    </div>;
  }
}

export default Nav;
