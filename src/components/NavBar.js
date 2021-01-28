import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import DescriptionIcon from '@material-ui/icons/Description';
import BlurCircular from '@material-ui/icons/BlurCircular';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#252426"
  },
  listItemText: {
    color: 'white',
    fontFamily: 'Major Mono Display',
    '&:hover': {
      color: "#669999",
      fontFamily: "Major Mono Display"
    }
  },
  drawerList: {
    fontFamily: "Major Mono Display"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white'
  },
  buttons: {
    '&:hover': {
      color: "#669999",
      fontFamily: "Major Mono Display"
    }
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    background: 'black',
    color: 'white',
    fontFamily: 'Major Mono Display'
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    drawerOpen: false
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, drawerOpen: open });
  };

  const list = (
    <div>
      <List className={classes.drawerList}>

          <ListItem button>
            <ListItemIcon>
              <NavLink
                className='drawer-button'
                style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Ubuntu' }} 
                to='/'
              >
                <span className='drawer-option'><HomeIcon style={{color: '#fff' }}/>HOME
                </span>
              </NavLink>
            </ListItemIcon>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <NavLink
                className='drawer-button'
                style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Ubuntu' }} 
                to='/projects'
              >
                <span className='drawer-option'><AssessmentIcon style={{color: '#fff' }}/>PROJECTS
                </span>
              </NavLink>
            </ListItemIcon>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <NavLink
                className='drawer-button'
                style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Ubuntu' }} 
                to='/about'
              >
                <span className='drawer-option'><SentimentVerySatisfiedIcon style={{color: '#fff' }}/>ABOUT
                </span>
              </NavLink>
            </ListItemIcon>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <NavLink
                className='drawer-button'
                style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Ubuntu' }} 
                to='/resume'
              >
                <span className='drawer-option'><DescriptionIcon style={{color: '#fff' }}/>RESUME
                </span>
              </NavLink>
            </ListItemIcon>
          </ListItem>

      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={toggleDrawer(true)}>
            {/* <MenuIcon /> */}
            <BlurCircular style={{ fontSize: 35 }} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Button>
            <NavLink
              className='app-bar-button'
              style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Ubuntu' }} 
              to='/'
            ><span className='nav-bar-option'>Home</span>
            </NavLink>
          </Button>
          <Button>
            <NavLink
              className='app-bar-button'
              style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Ubuntu' }} 
              to='/projects'
            >Projects
            </NavLink>
          </Button>
          <Button>
            <NavLink
              className='app-bar-button' 
              style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Ubuntu' }} 
              to='/about'
            >About
            </NavLink>
          </Button>
          <Button>
            <NavLink
              className='app-bar-button'
              style={{color: '#fff', textDecoration: 'none', fontFamily: 'Ubuntu'}}
              to='/resume'
              >Resume
              </NavLink>
            </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='left'
        open={state.drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{paper: classes.paper}}
      >
        {list}
      </Drawer>
    </div>
  );
}

export default NavBar;