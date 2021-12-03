import React from "react";

function Projects() {
    return (
        <div className='projects' onClick={() => {window.open(props.url)}}>
            <image className='projectImage' src={props.image}></image>
            <div>
                <h1>{props.name}</h1>
            </div>
        </div>
    );
}


export default Projects;