import React from "react";
import resume from '../../assets/files/Modern Professional Resume.pdf'

function Resume() {
    <div>
        <h1>My current resume can be downloaded <a href= {resume} >Here.</a> </h1>

        <h2><strong>My Front-end learned skills:</strong></h2>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>BootStrap</li>
                <li>Bulma</li>
            </ul>

        <h2><strong>My Back-end & Server-side skills:</strong></h2>
            <ul>
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
}

export default Resume;