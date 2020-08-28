import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Movie from './pages/movies/movies';
import Characters from './pages/characters/characters';
import './App.css';


function App() {


  return (
    <div className="App">
      <nav>
        <ul>
          <li id='home'><Link to={'/'}>Movies</Link></li>
          <li id='characters'><Link to={'/characters'}>Characters</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Movie />
        </Route>

        <Route path='/characters'>
          <Characters />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
