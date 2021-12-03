import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone,} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function ContactMe(){
    return (
        <div>
            <h1>Please Contact at any of the below:</h1>
                <ul>
                    <li><a href="tel:309-704-0015"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>Call Me</a></li>
                    <li><a href="mailto:chris.franklin1701@gmail.com"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>E-mail Me</a></li>
                    <li><a href="https://www.linkedin.com/in/christopher-franklin-a44957a4/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>Find me on LinkedIn</a></li>
                </ul>
        </div>
    );
}

export default ContactMe;