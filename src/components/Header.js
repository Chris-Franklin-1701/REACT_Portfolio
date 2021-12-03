import React from "react";
import '../styles/Header.css';

function Header({setPage}) {
    return (
        <header className="header">
            <div>
                <h1>Christopher Franklin</h1>
            </div>
            <nav>
                <a href="#aboutMe" onClick={() => setPage('About Me')}>About Me</a>
                <a href="#portfolio" onClick={() => setPage('Portfolio')}>Portfolio</a>
                <a href="#contactMe" onClick={() => setPage('Contact Me')}>Contact Me</a>
                <a href="#resume" onClick={() => setPage('Resume')}>Resume</a>
            </nav>
        </header>
    );
}

export default Header;