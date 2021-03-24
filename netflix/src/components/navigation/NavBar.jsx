import React from 'react';
import {Link, NavLink} from 'react-router-dom'; 
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
    return(
        <nav>
            <div className="Navbar">
                <Link to="/" className="main-logo"><img src="logo.png" alt="logo"/></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/series">Series</Link></li>
                    <li><Link to="/films">Films</Link></li>
                    <li><NavLink to="/newandpopulair">New And Populair</NavLink></li>
                    <li><NavLink to="/mylist">My List</NavLink></li>
                </ul>
                
                <ul> 
                    <li>
                        <NavLink to=""><FontAwesomeIcon icon={faSearch} /></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;