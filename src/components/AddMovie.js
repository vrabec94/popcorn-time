import { useState } from "react";

export function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const [imgURL, setImgURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title: title,
      rating: rating,
      imgURL: imgURL,
    };
    props.callbackToCreate(newMovie);

    //clear form
    setTitle("");
    setRating(1);
    setImgURL("");
  };

  return (
    <div className="AddMovie">
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
    </div>
  );
}
