import React from "react";

function ToyCard({ 
  id, 
  name, 
  image, 
  likes, 
  onDelete,
  onLikeClick 
}) {
  
  // DELETE BUTTON
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    onDelete(id)
  }
  
  // PATCH/UPDATE LIKE BUTTON
  function handleLike() {
    // Increment like counter
    const updatedLike = likes += 1
    
    // PATCH request with updated likes counter
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: updatedLike
      })
    })
      .then(res => res.json())
      // Send toy with updated likes count to helper function
      .then(updatedToy => onLikeClick(updatedToy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
