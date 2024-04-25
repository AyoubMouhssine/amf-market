import "./review.css";
const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="review-header">
        <div className="review-author">
          {review.user.nom} {review.user.prenom}
        </div>
        <div className="review-rating">{review.note}</div>
      </div>
      <div className="review-body">{review.text_avis}</div>
    </div>
  );
};

export default Review;
