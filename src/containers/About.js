import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import Container from '@material-ui/core/Container';
import AboutCard from '../components/Card/AboutCard.js';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '50px',
        marginBottom: '50px',
        placeItems: 'center'
    }
}))

const About = () => {
    const classes = useStyles();
    const fade = useSpring({
        from: {
            opacity: .5
        },
        to: {
            opacity: 1
        }
    })

    const AnimatedContainer = animated(Container);
    return(
        <AnimatedContainer style={fade} className={classes.container}>
            <AboutCard/>
        </AnimatedContainer>
    )
}

export default About;