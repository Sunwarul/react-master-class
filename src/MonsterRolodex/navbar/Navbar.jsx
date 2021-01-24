/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './navbar.style.css';
import { SearchBox } from '../search-box/SearchBox.component';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <ul>
                <li className="navbar-title">
                    <a href="/">Monster Rolodex</a>
                </li>
            </ul>
            <ul className="navbar-items">
                <li>
                    <SearchBox placeholder="Search here..." handleChange={props.handleSearch} />
                </li>
                <li>
                    <a href="#" className="navbar-link">About</a>
                </li>
                <li>
                    <a href="#" className="navbar-link">Contact me</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;