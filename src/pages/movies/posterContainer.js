import React, { useEffect, useState } from 'react';

function PosterContainer ({title}) {

    let [movieInfo, setMovieInfo] = useState();

    const getMoreInfo = (movieTitle) => {
        fetch(`http://www.omdbapi.com/?apikey=d522f8e6&t=${movieTitle}`)
            .then(res => res.json())
            .then(data => setMovieInfo(data))
    }

    useEffect (
        () => getMoreInfo(title), []
    )

    return(
        <div>
            {title}
            {console.log(movieInfo)}
        </div>
    );
}

export default PosterContainer;