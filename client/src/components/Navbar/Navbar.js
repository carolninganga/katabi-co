import React, { Component } from 'react'
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
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
                    <nav className="nav-wrapper N/A transparent">
                        <div className="container">
                            <a href="/" className="brand-logo" id="logo" style={{ textDecoration: 'none', color: "#212529" }}>Katabi</a>
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