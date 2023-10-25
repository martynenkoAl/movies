import React, { useState } from 'react';

function Search({ seachMovies }) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      seachMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    seachMovies(search, e.target.dataset.type);
  };

  return (
    <div className='row'>
      <div className='input-field'>
        <input
          placeholder='Search'
          type='search'
          className='validate'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className='btn search-btn'
          onClick={() => seachMovies(search, type)}
        >
          Search
        </button>
      </div>
      <div className='filter'>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            checked={type === 'all'}
            data-type='all'
            onChange={handleFilter}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            checked={type === 'movie'}
            data-type='movie'
            onChange={handleFilter}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            checked={type === 'series'}
            data-type='series'
            onChange={handleFilter}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );
}

export { Search };
