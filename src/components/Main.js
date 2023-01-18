
import "./Main.css"
import Movie from "./Movie";

function Main(props) {


  // Conditional Rendering with "Element Variables"
  let titleMessage;
  if(props.moviesArray.length > 0){
    titleMessage = <h2>Current number of movies: {props.moviesArray.length}</h2>;
  } else {
    titleMessage = <h2>Sorry, no movies to display</h2>
  }


  return (
    <div className="Main">

      {/* {titleMessage} */}

      {props.moviesArray.map( (movieObj) => {
        return(
          <Movie 
            key={movieObj.id} 
            movieDetails={movieObj} 
            callbackToDelete={props.callbackToDelete} />
        );
      })}

      
    </div>
  )
}

export default Main;
