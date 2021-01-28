import React from 'react';
import Carousel from 'react-material-ui-carousel'
import './Projects.css';
import data from '../../data/data.js';

class Projects extends React.Component {
    render() {
        const { projects } = data;

        const projectsDivs = projects.map(project => {
            return(
                <div className='project-div' align='center'>
                    <h1>{project.title}</h1>
                    <img className='project-image-div' src={project.pictures.picture1} alt={project.title} />
                    <div className='desc-div'>
                        <p>{project.description}</p>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <div className='spacer'></div>
                <Carousel>
                    { projectsDivs }
                </Carousel>
                <div className='spacer'></div>
            </div>
        )
    }
}

export default Projects;