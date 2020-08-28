import React, { useEffect, useState } from 'react';
import './poster.css';

function PosterContainer({ title, isHighlight }) {

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
        <div className='movie-poster'>
            {movieInfo &&
                <img className={isHighlight ? 'poster-center' : 'poster-not-center'} src={movieInfo.Poster} alt={'Poster' + title} />
            }
        </div>
    );
}

export default PosterContainer;