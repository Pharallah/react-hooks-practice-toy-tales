import React, { useState } from "react";

function ToyForm({ onToySubmit }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    likes: 0
  })
  
  // POST NEW TOY
  function handleSubmit(e) {
    e.preventDefault()

    // Create what you're POSTing
    const newToy = {
      name: form.name,
      image: form.image,
      likes: form.likes
    }

    // POST Request + 
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(createdToy => onToySubmit(createdToy))
  }
  
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={form.image}
          onChange={(e) => setForm({...form, image: e.target.value})}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
