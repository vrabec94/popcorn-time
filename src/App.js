import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import moviesFromJson from "./data/movies.json";
import './App.css';


function App() {

  const [moviesArray, setMoviesArray] = useState(moviesFromJson);

  const deleteMovie = (idOfTheMovieToDelete) => {

    //calc the new list of movies
    const newListOfMovies = moviesArray.filter( (movie) => {
      return movie.id !== idOfTheMovieToDelete;
    });

    //update state
    setMoviesArray(newListOfMovies);
  }

  return (
    <div className="App">
      <Header numberOfMovies={moviesArray.length} />
      <Main moviesArray={moviesArray} callbackToDelete={deleteMovie}/>
      <Footer />
    </div>
  );
}

export default App;