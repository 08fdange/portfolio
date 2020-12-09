import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    homeContainer: {
        paddingLeft: '0',
        paddingRight: '0',
        textAlign: 'center',
        alignItems: 'center'
    },
    homeDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        height: '75vh',
        
    },
    name: {
        fontFamily: 'Major Mono Display'
    },
    position: {
        fontFamily: 'Ubuntu'
    },
    divider: {
        backgroundColor: 'white'
    },
    projectButton: {
        color: 'white',
        fontSize: '1.2rem',
        fontFamily: 'Ubuntu',
        '&:hover': {
            color: "#669999"
        }

    }
}))

const Home = props => {
    const [active, toggle] = useState(false)
    const classes = useStyles();

    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })

    const fadeText = useSpring({
        from: {
            fontSize: '2rem'
        },
        to: {
            fontSize: '4rem'
        }
    })

    const slideDiv = useSpring({
        from: {
           transform: "(0, 100%)"
        },
        to: {
            transform: "(0, 0%)"
        }
    })

    const buttonHover = useSpring({
        fontSize: active ? '1.8rem' : '1.2rem'
    })

    const projectButtonClick = () => {
        props.routerProps.history.push('/projects')
    }

    const AnimatedBox = animated(Box);
    const AnimatedTypography = animated(Typography);
    const AnimatedDivider = animated(Divider);
    const AnimatedButton = animated(Button);

    return(
        <Container className={classes.homeContainer}>
            <AnimatedBox style={slideDiv} className={classes.homeDiv}>
                <Box>
                    <AnimatedTypography className={classes.name} style={fadeText} variant="sub-title">Frank D'Angelo</AnimatedTypography>
                    <AnimatedDivider className={classes.divider} style={fade}/>
                    <AnimatedTypography className={classes.position} style={fade} variant="h5">Full-Stack Developer</AnimatedTypography>
                    
                    <AnimatedButton 
                        className={classes.projectButton} 
                        onClick={projectButtonClick}
                        onMouseEnter={() => toggle(true)}
                        onMouseLeave={() => toggle(false)}
                        style={buttonHover} 
                    >
                        PROJECTS<br/><ExpandMoreIcon/>
                    </AnimatedButton>

                </Box>
            </AnimatedBox>
            
        </Container>
    )
}

export default Home;