import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <div className="container-fluid">
                <span onClick={() => navigate("/")} className="navbar-brand mb-0 h1">React Redux Contact Project</span>
            </div>
        </nav>
    )
}

export default Navbar