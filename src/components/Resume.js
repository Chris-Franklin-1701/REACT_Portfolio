import React from "react";
import resume from '../assets/files/Modern Professional Resume.pdf'

function Resume() {
    return (
        <div>
            <h1><img src={resume} /></h1>

            <h2><strong>My learned skills:</strong></h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>BootStrap</li>
                    <li>Bulma</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>Progressive Web Apps</li>
                    <li>Node.js</li>
                    <li>Database Theory</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Agile Methodology</li>
                    <li>Command Line</li>
                    <li>Git</li>
                </ul>
        </div>
    );
}

export default Resume;