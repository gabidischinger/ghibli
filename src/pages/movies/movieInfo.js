import React, {useState, useEffect} from 'react';
import './poster.css';

function MovieInfo({title}) {

    const [movieInfo, setMovieInfo] = useState();

    const getMoreInfo = (movieTitle) => {
        fetch(`http://www.omdbapi.com/?apikey=d522f8e6&t=${movieTitle}`)
            .then(res => res.json())
            .then(data => setMovieInfo(data))
    }

    useEffect(
        () => getMoreInfo(title), []
    )

    return (
        <div className='movie-info'>
            {console.log(movieInfo)}
            {movieInfo &&
            
            <>
            <div className='movie-title'>{title}</div>
            <div>Year: {movieInfo.Year}</div>
            <div>Runtime: {movieInfo.Runtime}</div>
            <div>Awards: {movieInfo.Awards}</div>
            <div>Genre: {movieInfo.Genre}</div>
            <div>Plot: {movieInfo.Plot}</div>
            <div>IMDB Rating: {movieInfo.imdbRating}</div>
            </>

            }
        </div>
    )
}

export default MovieInfo