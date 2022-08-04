import StarRating from "../../rating/StarRating";



function PostItem({ post, onUpdatePost, onDeletePost }) {
  const { id, image, title, description, notes, rating } = post;

  function handleUpdateRating(pct) {
    const newRating = pct * 5;
    fetch(`/spices/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newRating }),
    })
      .then((r) => r.json())
      .then(onUpdatePost);
  }

  function handleDeletePost() {
    fetch(`/spices/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeletePost(post);
      }
    });
  }

  return (
    <div className="spice-item card">
      <img src={image} alt={title} />
      <div className="details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          Tasting Notes: <em>{notes}</em>
        </p>
        <div>
          Rating:{" "}
          <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
        </div>
        <p>
          <button onClick={handleDeletePost}>Delete Post</button>
        </p>
      </div>
    </div>
  );
}

export default PostItem;