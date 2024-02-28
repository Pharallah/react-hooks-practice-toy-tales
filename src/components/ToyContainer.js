import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {

  // GET REQUEST
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(data => setToys(data))
  }, [setToys])

  // DELETES TOYS
  function onDelete(id) {
    // Returns an updated array of Toys WITHOUT the deleted item
    const updatedToys = toys.filter(toy => toy.id !== id)
    setToys(updatedToys)
  }

  // PATCH/UPDATE LIKES
  function onLikeClick(updatedToy) {
    // MAP thru Toys and IF the toy matches the ID of the Liked Toy, it will return that Toy (w/ the updated Like count) -- else just returns the original toy 
    const updatedToys = toys.map(toy => {
      if (toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })

    setToys(updatedToys)
  }

  // DISPLAY TOYS
  const renderToys = toys.map(toy => {
    return <ToyCard 
    key={toy.id}
    id={toy.id}
    name={toy.name}
    image={toy.image}
    likes={toy.likes}
    onDelete={onDelete}
    onLikeClick={onLikeClick}
    />
  })
  
  return (
    <div id="toy-collection">
      {renderToys}
      </div>
  );
}

export default ToyContainer;
