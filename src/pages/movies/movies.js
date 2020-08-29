import React, { useEffect, useState, useContext } from 'react';
import PosterContainer from './posterContainer';
import MovieInfo from './movieInfo';
import './poster.css';


function Movie({ title }) {

    const [movies, setMovies] = useState([]);
    const [i, setI] = useState(2);

    const getMovies = () => {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => res.json())
            .then(setMovies)
    }

    const handleClickNext = () => setI(i === movies.length - 1 ? 0 : i + 1);

    const handleClickPrevious = () => setI(i === 0 ? movies.length - 1 : i - 1);

    useEffect(
        () => getMovies(), [i]
    )

    return (
        <div className='movie-poster'>
            <button className='btn-next' onClick={handleClickPrevious}>&lt;</button>
            <div className="five-posters">
                {i === 0 && <PosterContainer title={movies[movies.length -2].title} isHighlight={false} />}
                { i < 2 && <PosterContainer title={movies[movies.length -1].title} isHighlight={false} />}
                {movies &&
                    movies.map((movie, index) =>
                        <PosterContainer key={movie.id} title={movies[index].title} isHighlight={index === i} />
                    ).filter((movie, index) => index <= i+2 && index >= i-2)
                }
                {(i >= movies.length - 2 && movies.length > 0 ) && <PosterContainer title={movies[0].title} isHighlight={false} />}
                {(i === movies.length - 1 && movies.length > 0) && <PosterContainer title={movies[1].title} isHighlight={false} />}
            </div>
            <button className='btn-prev' onClick={handleClickNext}>&gt;</button>
            {
                movies.length>0 &&
                <MovieInfo key={movies[i].id} title={movies[i].title} />
            }
        </div>
    );
}

export default Movie;