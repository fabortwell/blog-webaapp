import StarRating from "../../rating/StarRating";




function PostItem({ post, onUpdatePost, onDeletePost }) {
  const { id, image_url, title, author, content, created_at, category, notes, rating } = post;

  function handleUpdateRating(pct) {
    const newRating = pct * 5;
    fetch(`/posts/${id}`, {
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
    fetch(`/posts/delete/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeletePost(post);
      }
    });
  }

  return (
    <div className="spice-item card">
      <img src={image_url} alt={title} />
      <div className="details">
        <h2>{title}</h2>
        <h2>{author}</h2>
        <h2>{created_at}</h2>
        <h2>{category}</h2>
        <p>{content}</p>
        <p>
          Tasting Notes: <em>{notes}</em>
        </p>
        <div>
          Rating:{" "}
          <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
        </div>
        <p>
          <button onClick={handleDeletePost}>Delete Post</button>
          <button onClick={handleDeletePost}> Review Post</button>
        </p>
      </div>
    </div>
  );
}


export default PostItem;