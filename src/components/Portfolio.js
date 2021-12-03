import React from "react";
import Projects from './Projects';
import passgen from '../assets/images/passgen.png';
import codequiz from '../assets/images/code-quiz.png';
import ecommerce from '../assets/images/e-commerce.png';
import ems from '../assets/images/EMS.png';
import fitness from '../assets/images/fitness tracker.png';
import note from '../assets/images/note-taker.png';
import project2 from '../assets/images/project2.png';
import team from '../assets/images/Team Profile Generator.png';
import weather from '../assets/images/weather-dashboard.png';
import work from '../assets/images/work_day.png';



const ProjectsMain = [
    {
        id:0,
        name: 'Secure Password Generator',
        description: 'JavaScript',
        image: passgen,
        url: 'https://github.com/Chris-Franklin-1701/password-generator'
    },
    {
        id:1,
        name: 'Coding Quiz',
        description: 'JavaScript',
        image: codequiz,
        url: 'https://github.com/Chris-Franklin-1701/Coding-Quiz'
    },
    {
        id:3,
        name: 'Workday Scheduler',
        description: 'JavaScript & Moment.js',
        image: work,
        url: 'https://github.com/Chris-Franklin-1701/Work_Day_Scheduler'
    },
    {
        id:4,
        name: 'Note Taker',
        description: 'JavaScript & Express.js',
        image: note,
        url: 'https://github.com/Chris-Franklin-1701/Note_Taker'
    },
    {
        id:5,
        name: 'Weather Dashboard',
        description: 'JavaScript & OpenWeather API',
        image: weather,
        url: 'https://github.com/Chris-Franklin-1701/Weather-Dashboard'
    },
    {
        id:6,
        name: 'Team Profile Generator',
        description: 'OOP, JavaScript, BootStrap',
        image: team,
        url: 'https://github.com/Chris-Franklin-1701/Team-Profile-Generator'
    },
    {
        id:7,
        name: 'Employee Management System',
        description: 'MySQL, Node.js, & Inquirer',
        image: ems,
        url: 'https://github.com/Chris-Franklin-1701/Employee-Management-System'
    },
    {
        id:8,
        name: 'E-Commerce Backend',
        description: 'MySQL, Sequelize, & Node.js',
        image: ecommerce,
        url: 'https://github.com/Chris-Franklin-1701/ORM-E-Commerce-Back-End'
    },
    {
        id:9,
        name: 'Fitness Tracker',
        description: 'MongoDB & Node.js',
        image: fitness,
        url: 'https://github.com/Chris-Franklin-1701/Fitness_Tracker'
    },
    {
        id:10,
        name: 'Can Do Translations',
        description: 'BootStrap, JavaScript, Express.js, Sequelize, & APIs',
        image: project2,
        url: 'https://github.com/Chris-Franklin-1701/CAN-Do-Translations'
    },
    
]

const styles = {
    portfolioPage: {
        display: 'flex',
        flexwrap: 'wrap'
    }
}


function Portfolio() {
    return (
        <div style={styles.portfolioPage}>
            {
                ProjectsMain.map((project) => (
                    <Projects key={project.id} title={project.name} description={project.description} image={project.image} url={project.url} />
                ))
            }
        </div>
    );
}


export default Portfolio;