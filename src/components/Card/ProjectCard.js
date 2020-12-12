import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Card.css';
import GitHubIcon from '@material-ui/icons/GitHub';

const ProjectCard = ({project}) => {
    const { index, title, pictures, description, gitHubLink } = project;
    const fade = useSpring({
        from: {
            opacity: .2
        },
        to: {
            opacity: 1
        }
    })
    

    return (
        <animated.div id={`card-${index}`} className="card" style={fade} >
            <img src={pictures.picture1} alt={title} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    <strong>{title}</strong><br/>
                    {description}
                </p>
                <ul className="links">
                    <li>
                        <a href={gitHubLink}><GitHubIcon/></a>
                    </li>
                </ul>
            </div>
        </animated.div>
    );
}
 
export default ProjectCard;