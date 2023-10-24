import Movie from './Movie';

export default function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className='movies'>
      {movies.length ? (
        movies.map((el) => {
          return <Movie key={el.imdbID} {...el} />;
        })
      ) : (
        <h4>Nothing is found</h4>
      )}
    </div>
  );
}
