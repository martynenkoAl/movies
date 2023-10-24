import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.seachMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.seachMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    const { search, type } = this.state;
    return (
      <div className='row'>
        <div className='input-field'>
          <input
            placeholder='Search'
            type='search'
            className='validate'
            value={search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className='btn search-btn'
            onClick={() =>
              this.props.seachMovies(this.state.search, this.state.type)
            }
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
              checked={this.state.type === 'all'}
              data-type='all'
              onChange={this.handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              checked={this.state.type === 'movie'}
              data-type='movie'
              onChange={this.handleFilter}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              checked={this.state.type === 'series'}
              data-type='series'
              onChange={this.handleFilter}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
