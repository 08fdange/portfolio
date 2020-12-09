import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProjectCard from '../../components/Card/ProjectCard.js';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';
import data from '../../data/data.js';
import './Projects.css';

const styles = theme => ({
    root: {
        marginTop: '50px',
        marginButton: '50px',
        display: 'grid',
        placeItems: 'center'
    },
    buttonGroup: {
        background: '#669999'
    }
})

class Projects extends React.Component {
    state = {
        projects: data.projects,
        project: data.projects[0]
    }

    nextProject = (e) => {
        e.preventDefault();
        const newIndex = this.state.project.index + 1
        this.setState({
            project: data.projects[newIndex]
        });
    }

    previousProject = (e) => {
        e.preventDefault();
        const newIndex = this.state.project.index - 1
        this.setState({
            project: data.projects[newIndex]
        });
    }

    

    render() {
        const { classes } = this.props;
        const {project} = this.state;
        
        return(
            <Container className={classes.root}>
                <div className='cards-slider'>
                    <div className="cards-slider-wrapper">
                        <ProjectCard key={project.index} project={project} />
                    </div>
                </div>
                
                <ButtonGroup className={classes.buttonGroup}>
                    <Button
                        onClick={(e) => this.previousProject(e)}
                        disabled={project.index === 0}
                    >
                        <NavigateBefore/>
                    </Button>
                    <Button
                        onClick={(e) => this.nextProject(e)}
                        disabled={project.index === data.projects.length -1}
                    >
                        <NavigateNext/>
                    </Button>
                </ButtonGroup>
            </Container>
        )
    }
}

export default withStyles(styles)(Projects);

//  { withTheme: true }