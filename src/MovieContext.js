import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

/*
* Don't use export default, use export!
*/
export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '10 TL',
            id: 2312
        },
        {
            name: 'Game of Thrones',
            price: '20 TL',
            id: 44645
        },
        {
            name: 'Inception',
            price: '30 TL',
            id: 5345324
        }
    ]);
    return(
     <MovieContext.Provider value={[movies, setMovies]}>
         {props.children}
     </MovieContext.Provider>
    );
}