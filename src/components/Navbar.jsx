import React, { useState } from 'react';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.style.backgroundColor = '#343a40';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-${darkMode ? 'dark' : 'light'} bg-${darkMode ? 'dark' : 'light'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Text Tutorials</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleDarkMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{darkMode ? 'Light Mode' : 'Dark Mode'}</label>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
