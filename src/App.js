import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './Widgets/NavBar.js';

// Pages Import
import Home from './Pages/home/home';
import About from './Pages/about/about';
import Calculate from './Pages/calculate/calculate';
import Information from './Pages/information/information';
import Error from './Pages/error';

function App() {
  return (
    <Router>

      <NavBar />


      <Switch>

      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/calculate">
        <Calculate />
      </Route>

      <Route path="/information">
        <Information />
      </Route>

      <Route path="*">
        <Error />
      </Route>

      </Switch>

    </Router>
  );
}

export default App;
