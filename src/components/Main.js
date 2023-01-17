import { useState } from "react";
import moviesFromJson from "../data/movies.json"
import "./Main.css"

function Main() {
  
const [moviesArr, setMoviesArr] = useState(moviesFromJson);

const deleteMovie = (idOfTheMovieToDelete) => {
    const newListOfMovies = moviesArr.filter( (movie) => {
        if(movie.id === idOfTheMovieToDelete){
            return false;
          } else {
            return true;
          }
    });

    //update state
    setMoviesArr(newListOfMovies)

  }
/* button onclick: here we pass an anonymous function, so that the function is not immediately executed */
  return (
    <div className="Main">

    <h2>Current number of movies: {moviesArr.length}</h2> 

      {moviesArr.map((movieDetails) => {
        return (
            <div key={movieDetails.id} className="card movie">
            <p>{movieDetails.title}</p>
            <p>Rating: {movieDetails.rating}</p>
            <p>Year: {movieDetails.year}</p>
            <button onClick={() => {deleteMovie(movieDetails.id)}}>Delete this movie</button>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
