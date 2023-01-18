import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import moviesFromJson from "./data/movies.json";
import "./App.css";
import { AddMovie } from "./components/AddMovie";

function App() {
  const [moviesArray, setMoviesArray] = useState(moviesFromJson);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const [imgURL, setImgURL] = useState("");

  const deleteMovie = (movieTitle) => {

    //calc the new list of movies
    const newListOfMovies = moviesArray.filter((movie) => {
      return movie.title !== movieTitle;
    });

    //update state
    setMoviesArray(newListOfMovies);
  }

  const createMovie = (newMovieObj) => {
    //update list of movies
    setMoviesArray((prevListOfMovies) => {
      const newList = [newMovieObj, ...prevListOfMovies];
      return newList;
    });
  } 

  return (
    <div className="App">
      <Header numberOfMovies={moviesArray.length} />
      <AddMovie callbackToCreate={createMovie} />
      <Main moviesArray={moviesArray} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
