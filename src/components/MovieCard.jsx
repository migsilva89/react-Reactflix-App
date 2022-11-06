import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard(props) {
  return (
    <Link to={`/movie/${props.slug}`} className="movieCard">
      <div>
        <h4 className="movieName">{props.movieName}</h4>
        <img src={props.movieUrl} alt="" className='imgMovie'/>
      </div>
    </Link>
  );
}

export default MovieCard;
