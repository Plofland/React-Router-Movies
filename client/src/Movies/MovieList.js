import React from "react";
import { useHistory } from "react-router-dom";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  //declare history
  const history = useHistory();

  //add a click fuction to push the url with id to history

  return (
    <div
      className="movie-card"
      onClick={(event) => {
        history.push(`/movie/${id}`);
      }}
    >
      {" "}
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
