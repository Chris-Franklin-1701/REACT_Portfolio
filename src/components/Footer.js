import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const styles = {
    footerStyle: {
        display: "flex",
        flexDirection: "inline-block",
        justifyContent: "center"
    }
}

function Footer(){
    return(
        <footer style={styles.footerStyle}>
            <a href="https://github.com/Chris-Franklin-1701" target="blank" class="icon brands fa-github"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/christopher-franklin-a44957a4/" target="blank" class="icon brands fa-linkedin-in"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
        </footer>

    )
}

export default Footer;