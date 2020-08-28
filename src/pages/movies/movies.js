import React, { useEffect, useState, useContext } from 'react';
import PosterContainer from './posterContainer';
import MovieInfo from './movieInfo';
import './poster.css';


function Movie({ title }) {

    const [movies, setMovies] = useState();
    const [firstMovie, setFirstMovie] = useState(0);
    const [lastMovie, setLastMovie] = useState(4);

    const getMovies = () => {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => res.json())
            .then(setMovies)
    }

    const handleClickNext = () => {

        setFirstMovie(firstMovie + 1);
        setLastMovie(lastMovie + 1);


    }

    const handleClickPrevious = () => {

        setFirstMovie(firstMovie - 1);
        setLastMovie(lastMovie - 1);

    }

    useEffect(
        () => getMovies(), [firstMovie]
    )

    return (
        <div className='movie-poster'>
            {firstMovie === 0 ? <></> : <button className='btn-next' onClick={handleClickPrevious}>&lt;</button>}
            <div className="five-posters">
                {movies &&
                    movies.map((movie, index) =>
                        <PosterContainer key={movie.id} title={movies[index].title} isHighlight={index === firstMovie} />
                    ).filter((movie, index) => index >= firstMovie && index <= lastMovie)}
            </div>
            {movies &&
                    firstMovie === movies.length - 1 ? <></> : <button className='btn-prev' onClick={handleClickNext}>&gt;</button>}
            {
                movies &&
                <MovieInfo key={movies[firstMovie].id} title={movies[firstMovie].title} />
            }
        </div>
    );
}

export default Movie;