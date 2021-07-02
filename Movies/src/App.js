import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  let urlDataTest = 'https://react-http-56a5a-default-rtdb.europe-west1.firebasedatabase.app/movies.json';
  urlDataTest = urlDataTest + '/';
  const urlData = 'https://swapi.dev/api/films';
  
  const fetchMoviesHandler = useCallback(async () => {
    setIsloading(true);
    setError(null);
    try {
      const response = await fetch(urlData);
      if (!response.ok) {throw new Error('Someting not match')}
      const data = await response.json();
      
      const transformedMovies = data.results.map(moviData => {
        return {
          id: moviData.episode_id,
          title: moviData.title,
          openingText: moviData.opening_crawl,
          releaseDate: moviData.release_date
        }
      })
      setMovies(transformedMovies)

    }catch(error) {
      setError(error.message);
    }
    setIsloading(false);

  }, []);
  useEffect( ()=> {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading ? movies.length !== 0 ? <MoviesList movies={movies} /> : !error && <p>Not Found</p> : <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
