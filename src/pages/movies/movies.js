import React, { useEffect, useState, useContext } from 'react';
import PosterContainer from './posterContainer';
import MoviesContext from '../../context/moviesContext';


function Movie({ title }) {

    

    return (
        <div>
            <PosterContainer title={title} />
        </div>
    );
}

export default Movie;