import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
        <input type="text" placeholder="Search" />
        <input type="submit" value="Search" />
    </div>
  )
}

export default Navbar;