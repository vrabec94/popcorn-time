import { useState } from "react";
import moviesFromJson from "../data/movies.json"
import "./Main.css"
import Movie from "./Movie";

function Main() {


  const [moviesArr, setMoviesArr] = useState(moviesFromJson);


  const deleteMovie = (idOfTheMovieToDelete) => {

    //calc the new list of movies
    const newListOfMovies = moviesArr.filter( (movie) => {
      return movie.id !== idOfTheMovieToDelete;
    });

    //update state
    setMoviesArr(newListOfMovies);
  }
  

  // Conditional Rendering with "Element Variables"
  let titleMessage;
  if(moviesArr.length > 0){
    titleMessage = <h2>Current number of movies: {moviesArr.length}</h2>;
  } else {
    titleMessage = <h2>Sorry, no movies to display</h2>
  }


  return (
    <div className="Main">

      {titleMessage}

      {moviesArr.map( (movieObj) => {
        return <Movie key={movieObj.id} movieDetails={movieObj} myCallback={deleteMovie} />
      })}

      
    </div>
  )
}

export default Main;
