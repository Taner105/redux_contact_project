import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <div class="container-fluid">
                <span onClick={() => navigate("/")} class="navbar-brand mb-0 h1">React Redux Contact Project</span>
            </div>
        </nav>
    )
}

export default Navbar