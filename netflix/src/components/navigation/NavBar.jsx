import React from 'react';
import {Link, NavLink} from 'react-router-dom'; 

const NavBar = () => {
    return(
        <nav>
            <div className="container">
                <a className="main-logo">Netflix</a>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/series">Series</Link></li>
                    <li><Link to="/films">Films</Link></li>
                    <li><NavLink to="/newandpopulair">New And Populair</NavLink></li>
                    <li><NavLink to="/mylist">My List</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;