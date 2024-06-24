import React from "react";
import { Link } from "react-router-dom";

function Navbar()
{
    
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link><br></br>
                <Link to="/about">About Me</Link><br></br>
                <Link to="/login">Login</Link>
               
            </nav>
        </div>
    );
}
export default Navbar;