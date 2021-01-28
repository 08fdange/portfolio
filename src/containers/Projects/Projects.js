import React from 'react';
import Carousel from 'react-material-ui-carousel'
import GitHubIcon from '@material-ui/icons/GitHub';
import './Projects.css';
import data from '../../data/data.js';

class Projects extends React.Component {
    render() {
        const { projects } = data;

        const projectsDivs = projects.map(project => {
            return(
                <div className='project-div' align='center'>
                    <h1>{project.title} </h1>
                    <img className='project-image-div' src={project.pictures.picture1} alt={project.title} />
                    <div className='desc-div'>
                        <p>{project.description}</p>
                    </div>
                    <span><a href={project.githubLink} alt='Github Link'><GitHubIcon/></a></span>
                </div>
            )
        })

        return(
            <div>
                <div className='spacer'></div>
                <Carousel interval={6000}>
                    { projectsDivs }
                </Carousel>
                <div className='spacer'></div>
            </div>
        )
    }
}

export default Projects;