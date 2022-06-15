import './App.css';
// import './index.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import Header from './components/Header';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

const App = () => {
  const URL = 'https://portfolio-lab-seanw.herokuapp.com/'
  return (
    <div className="App">
      <Header />
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/projects'>
          <Projects URL={URL} />
        </Route>

        <Route path='/about'>
          <About URL={URL} />
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
