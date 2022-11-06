import React, { useState } from 'react';
import movies from '../data/movies.json';
import MovieCard from '../components/MovieCard';
import Search from '../components/Search';
import MovieList from '../components/MovieList';

// Layout
import MainLayout from '../layouts/MainLayout';

function MoviesPage() {
  const [movieToSearch, setMovieToSearch] = useState('');
  const moviesToRender = movies.filter((movie) => {
    if (movieToSearch === '') {
      return movie;
    } else if (movie.title.toLowerCase().includes(movieToSearch.toLowerCase())) {
      return movie;
    }
  });
  return (
    <MainLayout>
      <h2>Movies page</h2>
      <Search setMovieToSearch={setMovieToSearch} />
      <MovieList movies={moviesToRender} />
    </MainLayout>
  );
}

export default MoviesPage;
