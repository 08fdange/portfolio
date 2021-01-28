import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar.js';
import Home from './containers/Home.js';
import About from './containers/About.js';
import Projects from './containers/Projects/Projects.js';
import Resume from './containers/Resume.js';
import Footer from './components/Footer.js';
import './App.css';
import background from './assets/background1.jpg';

const App = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
  }))
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <NavBar />
        <main className='main-container'>
          <Switch>
            <Route exact path='/' render={routerProps => <Home routerProps={routerProps} />} />
            <Route exact path='/about' render={routerProps => <About routerProps={routerProps}  />} />
            <Route exact path='/projects' render={routerProps => <Projects routerProps={routerProps}  />} />
            <Route exact path='/resume' render={routerProps => <Resume routerProps={routerProps} />} />
          </Switch>
        </main>
        <Footer />
    </div>
  );
}

export default App;
