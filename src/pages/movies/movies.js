import React, { useEffect, useState, useContext } from 'react';
import PosterContainer from './posterContainer';
import MoviesContext from '../../context/moviesContext';


function Movie({ title }) {

    const getMoreInfo = (movieTitle) => {
        fetch(`http://www.omdbapi.com/?apikey=d522f8e6&t=${movieTitle}`)
            .then(res => res.json())
    }

    return (
        <div>
            {title}
        </div>
    );
}

export default Movie;