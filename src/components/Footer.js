import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { useSpring, animated } from 'react-spring';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'black',
        height: '80px',
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: '#fff',
        fontSize: "3rem",
        alignItems: "center",
        textAlign: "center",
    },
    icons: {
        color: 'white', 
        fontSize: '40px',
        '&:hover': {
            color: "#669999"
          }
    }
}))

const Footer = () => {
    const classes = useStyles();
    const [active, toggle] = useState(false);
    const iconHover = useSpring({
        fontSize: active ? '70px' : '40px'
    })
    const AnimatedLinkedInIcon = animated(LinkedInIcon);
    const AnimatedGitHubIcon = animated(GitHubIcon);
    const AnimatedMailIcon = animated(MailIcon);

    return(
        <Box>
            <Box className={classes.footer}>
                <ButtonGroup>
                    <a href='https://www.linkedin.com/in/frankdangelodev/' target='_blank' rel='noreferrer'>
                        <Button>
                            <AnimatedLinkedInIcon 
                                className={classes.icons}
                                onMouseEnter={() => toggle(true)}
                                onMouseLeave={() => toggle(false)}
                                style={iconHover}
                            />
                        </Button>
                    </a>
                    <a href='https://github.com/08fdange' target='_blank' rel='noreferrer'>
                        <Button>
                            <AnimatedGitHubIcon 
                                className={classes.icons}
                                onMouseEnter={() => toggle(true)}
                                onMouseLeave={() => toggle(false)}
                                style={iconHover}
                            />
                        </Button>
                    </a>
                    <a href='mailto:08fdange@gmail.com'>
                        <Button>
                            <AnimatedMailIcon 
                                className={classes.icons}
                                onMouseEnter={() => toggle(true)}
                                onMouseLeave={() => toggle(false)}
                                style={iconHover} 
                            />
                        </Button>
                    </a>
                </ButtonGroup>
            </Box>
        </Box>
    )
}

export default Footer;