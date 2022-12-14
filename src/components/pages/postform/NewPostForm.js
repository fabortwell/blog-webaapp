import { useState } from "react";
import './new.css'

const initialState = {
  title: "",
  image: "",
  notes: "",
  content: "",
  rating: "",
  author: ""
};

function NewPostForm({ onAddPost }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://blog-sitapp.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newPost) => {
        setFormData(initialState);
        onAddPost(newPost);
      });
  }

  return (
    <div className="card">
      <h2>New Post</h2>
      <form className="new" onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />


        <label htmlFor="image">Image URL: </label>
        <input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />
        {/* <label htmlFor="notes">Tasting Notes: </label>
        <input
          type="text"
          id="notes"
          value={formData.notes}
          onChange={handleChange}
        /> */}
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          value={formData.content}
          onChange={handleChange}
        />
        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          id="rating"
          max="5"
          value={formData.rating}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPostForm;