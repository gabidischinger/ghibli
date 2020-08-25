import React, { useState, useEffect } from 'react';
import Movie from './pages/movies/movies';
import MoviesContext from './context/moviesContext';


function App() {

  let [movies, setMovies] = useState();
  let firstMovie = 0;
  let lastMovie = 4;

  const getMovies = () => {
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then(res => res.json())
      .then(setMovies)
  }

  const moviesList = () => {
    if (movies) {
      for (let i = firstMovie; i <= lastMovie; i++) {
        return <Movie title={movies[i].title} />
      }
    }
  }

  useEffect(
    () => getMovies(), []
  )


  return (
    <div className="App">
      {moviesList()}
    </div>
  );
}

export default App;
