import React from "react";


import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Portfolio from './Portfolio';
import Resume from "./Resume";

function Main({page}) {
    if (page === 'About Me') {
        return (
            <div>
                <h1>About Me</h1>
                <AboutMe />
            </div>
        );
    }else if (page === 'Contact Me') {
        return (
            <div>
                <h1>Contact Me</h1>
                <ContactMe />
            </div>
        );
    }else if (page === 'Portfolio') {
        return (
            <div>
                <h1>Portfolio</h1>
                <Portfolio />
            </div>
        );
    }else{
        return (
            <div>
                <h1>Resume</h1>
                <Resume />
            </div>
        );
    }
}

export default Main;