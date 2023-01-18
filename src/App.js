import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import moviesFromJson from "./data/movies.json";
import "./App.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title: title,
      rating: rating,
      imgURL: imgURL
    };

    //update list of movies
    setMoviesArray((prevListOfMovies) => {
      const newList = [newMovie, ...prevListOfMovies];
      return newList;
    });

    //clear form
    setTitle("");
    setRating(1);
    setImgURL("");
  };

  return (
    <div className="App">
      <Header numberOfMovies={moviesArray.length} />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          required={true}
          placeholder="enter the title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="number"
          name="rating"
          required={true}
          placeholder="Rate from 1 to 10"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />
        <input
          type="url"
          name="imgURL"
          placeholder="https://your-image-url.com"
          pattern="https://.*"
          value={imgURL}
          onChange={(e) => {
            setImgURL(e.target.value);
          }}
        />

        <button>Create</button>
      </form>

      <Main moviesArray={moviesArray} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
