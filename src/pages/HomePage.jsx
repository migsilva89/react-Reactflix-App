import React from 'react';
import movies from '../data/movies.json';
// Layout
import MainLayout from '../layouts/MainLayout';
// Components
import MovieCard from '../components/MovieCard';
import MovieList from '../components/MovieList';

function bioMovies() {
  const bioMovies = [];
  movies.forEach((movie) => {
    if (movie.genres.includes('Biography')) {
      bioMovies.push(movie);
    }
  });
  return bioMovies;
}

function HomePage() {
  let movieWithMostLikes = null;

  for (let i = 0; i < movies.length; i++) {
    const numberOfLikes = movies[i].likes;

    if (!movieWithMostLikes || movieWithMostLikes.likes < numberOfLikes) {
      movieWithMostLikes = movies[i];
    }
  }

  return (
    <MainLayout>
      <h1>Home Page</h1>
      <div>
        <div>
          Filmes de Biografia sao:
          <MovieList movies={bioMovies()} />
        </div>
      </div>
      <div>
        <div>Filme com mais likes é o: </div>
        <MovieCard slug={movieWithMostLikes.slug} movieUrl={movieWithMostLikes.imageUrl} movieName={movieWithMostLikes.title} />
      </div>
    </MainLayout>
  );
}

export default HomePage;
