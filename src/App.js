import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar.js';
import Home from './containers/Home.js';
import About from './containers/About.js';
import Projects from './containers/Projects.js';
import Footer from './components/Footer.js';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2775&q=80')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}))

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <NavBar />
        <main className='main-container'>
          <Switch>
            <Route exact path='/' render={routerProps => <Home routerProps={routerProps} />} />
            <Route exact path='/about' render={routerProps => <About routerProps={routerProps} />} />
            <Route exact path='/projects' render={routerProps => <Projects routerProps={routerProps} />} />
          </Switch>
        </main>
        <Footer />
    </div>
  );
}

export default App;
