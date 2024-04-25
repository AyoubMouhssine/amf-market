import React, { useEffect, useState } from "react";
import "./addreviewform.css";
const AddReviewForm = ({ onAddReview }) => {
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview({ note: rating, text_avis: body });
    setRating(0);
    setBody("");
  };

  useEffect(() => {
    const author = JSON.parse(sessionStorage.getItem("current_user"));
    setAuthor(`${author.user.nom} ${author.user.prenom}`);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="add-review-form">
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        readOnly
        value={author}
      />
      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        min="0"
        max="5"
        value={rating}
        onChange={(e) => setRating(parseInt(e.target.value))}
      />
      <label htmlFor="body">Review:</label>
      <textarea
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Add Review</button>
    </form>
  );
};

export default AddReviewForm;
