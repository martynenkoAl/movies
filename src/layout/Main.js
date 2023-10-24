import React from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = { movies: [], isLoading: true };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, isLoading: false }));
  }

  seachMovies = (text, type = 'all') => {
    this.setState({ isLoading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${text}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, isLoading: false }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className='container content'>
        <Search seachMovies={this.seachMovies} />
        {!this.state.isLoading ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
