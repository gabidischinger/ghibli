import React, { useEffect, useState, useContext } from 'react';
import PosterContainer from './posterContainer';
import MovieInfo from './movieInfo';
import './poster.css';


function Movie({ title }) {

    const [movies, setMovies] = useState();
    const [i, setI] = useState(2);

    const getMovies = () => {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => res.json())
            .then(setMovies)
    }

    const handleClickNext = () => {


        if (i === movies.length - 1)
        {
            setI(0);
        } else {
            setI(i + 1);
        }

    }

    const handleClickPrevious = () => {

        if (i === 0)
        {
            setI(movies.length - 1);
        } else {
            setI(i - 1);
        }

    }

    useEffect(
        () => getMovies(), [i]
    )

    return (
        <div className='movie-poster'>
            <button className='btn-next' onClick={handleClickPrevious}>&lt;</button>
            <div className="five-posters">
                {movies &&
                    movies.map((movie, index) =>
                        <PosterContainer key={movie.id} title={movies[index].title} isHighlight={index === i} />
                    ).filter((movie, index) => {
                        if ( i + 2 === movies.length - 1) {
                            return index >= i - 2 || index === 0;
                        } else if ( i + 1 === movies.length - 1) {
                            return index >= i - 2 || index === 0 || index === 1;
                        } else if (i  === movies.length - 1) {
                            return index >= i - 2 || index === 0 || index === 1 || index === 2;
                        } 
                        else {
                            return index >= i - 2 && index <= i + 2;
                        }
                    })}
            </div>
            <button className='btn-prev' onClick={handleClickNext}>&gt;</button>
            {
                movies &&
                <MovieInfo key={movies[i].id} title={movies[i].title} />
            }
        </div>
    );
}

export default Movie;