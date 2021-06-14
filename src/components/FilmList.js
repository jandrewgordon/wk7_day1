import React from 'react';
import Film from './Film';

const FilmList = ({films})=>{

    const filmNodes = films.map((film) => {
        return <Film title={film.name} url={film.url}>{film.name}</Film>
    })

    return (
        <ul className='film-list'>
            {filmNodes}
        </ul>
        
     
         
    )

}

export default FilmList;