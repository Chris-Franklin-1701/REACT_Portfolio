import React from "react";

function Projects(props) {
    return (
        <div className='projects' onClick={() => {window.open(props.url)}}>
            <img className='projectImage' src={props.image} />
            <div>
                <h1>{props.name}</h1>
            </div>
        </div>
    );
}


export default Projects;