import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  return (
    <div className="gridMovieCard">
      {props.movies.map((movie, index) => (
        <MovieCard movieName={movie.title} key={index} movieUrl={movie.imageUrl} slug={movie.slug} />
      ))}
    </div>
  );
}

export default MovieList;
