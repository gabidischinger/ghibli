import React, { useState, useEffect } from 'react';
import './characters.css';

function Characters() {

    const [characters, setCharacters] = useState([]);

    const getCharacters = () => {
        fetch('https://ghibliapi.herokuapp.com/people/')
            .then(res => res.json())
            .then(data => setCharacters(data))
    }

   

    useEffect(
        () => {
            getCharacters()
        }, []
    )

    return (
        <div className='cards-container'>
            {characters.map(character => {
                return <div className='character-card' key={character.id}>
                    <div className='name'>{character.name}</div>
                    <div>Gender: {character.gender}</div>
                    <div>Age: {character.age}</div>
                </div>
            })}
        </div>
    )
}

export default Characters;