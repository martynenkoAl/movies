import React, { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const seachMovies = (text, type = 'all') => {
    setIsLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <main className='container content'>
      <Search seachMovies={seachMovies} />
      {!isLoading ? <Movies movies={movies} /> : <Preloader />}
    </main>
  );
}

export { Main };
