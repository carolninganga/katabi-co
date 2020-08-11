import React, { Component } from 'react'
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import Logo from './katabi-logo.png'
import './Navbar.css';

class Navbar extends Component {

    componentDidMount() {
        let sidenav = document.querySelector(".sidenav");
        M.Sidenav.init(sidenav, {});
      }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="nav-wrapper" style={{background: "rgba(187,187,187,0.9)"}}>
                        <div className="container">
                        <Link to="/">
                            <img className="brand-logo mt-1 pt-1" src={Logo} alt="logo" />
                        </Link>
                            <a href="/" className="sidenav-trigger" data-target="mobile-links" style={{ textDecoration: 'none' }}>
                                <i className="material-icons" style={{color: "#212529"}}>menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li className="myNav"><Link to="/" style={{ textDecoration: 'none', color: "#212529"}}>Home</Link></li>
                                <li className="myNav"><Link to="/about" style={{ textDecoration: 'none', color: "#212529" }}>About</Link></li>

                            </ul>
                        </div>
                    </nav>
                    </div> 

                    <ul className="sidenav" id="mobile-links"> 
                        <li><Link to="/" style={{ textDecoration: 'none', color: "#212529" }}>Home</Link></li>
                        <li><Link to="/about" style={{ textDecoration: 'none', color: "#212529" }}>About</Link></li>

                    </ul>
            </div>

            
        )
    }
}




export default Navbar;