import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { useParams } from 'react-router-dom';
import movies from '../data/movies.json';

function SingleMoviePage() {
  const params = useParams();
  const movieSlug = params.movieSlug;

  const movie = movies.find((movie) => movie.slug === movieSlug);
  const hasVideoId = movie.youTubeTrailerId !== null;

  return (
    <MainLayout>
      <h2>{movie.title}</h2>
      <img src={movie.imageUrl} alt="" />
      <p>Desc: {movie.description}</p>
      <p>Year: {movie.year}</p>
      <p>Release Date:{movie.releaseDate}</p>
      <p>Numero de escritores: {movie.writers.length}</p>
      <div>Nomes dos escitores:</div>
      {movie.writers.map((writer, index) => {
        //! duplo valor para key ${writer}${index}
        return <div key={`${writer}${index}`}>{writer}</div>;
      })}
      {hasVideoId ? (
        <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movie.youTubeTrailerId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div>
            <a target="_blank" href={`https://www.youtube.com/watch?v=${movie.youTubeTrailerId}`}>
              Ver o trailler no youtube
            </a>
          </div>
        </div>
      ) : (
        <p>There's no video to Watch</p>
      )}
    </MainLayout>
  );
}

export default SingleMoviePage;
