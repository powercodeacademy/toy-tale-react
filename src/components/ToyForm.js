import React, { useState } from "react"

const ToyForm = ({onToyFormSubmit}) => {
  const [newToyName, setNewToyName] = useState("")
  const [newToyImage, setNewToyImage] = useState("")

  const getRandomInt = (max)  => (
    Math.floor(Math.random() * max)
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    const newToy = {
      "id": getRandomInt(100000),
      "name": newToyName,
      "image": newToyImage,
      "likes": 0
    }
    onToyFormSubmit(newToy)
    setNewToyName("")
    setNewToyImage("")
  }

  const handleToyNameChange = (event) => {
    setNewToyName(event.target.value)
  }

  const handleToyImageChange = (event) => {
    setNewToyImage(event.target.value)
  }

  return (
    <form className="add-toy-form" onSubmit={handleSubmit}>
      <h3>Create a toy!</h3>

      <input
        className="input-text"
        name="name"
        onChange={handleToyNameChange}
        placeholder="Enter a toy's name..."
        type="text"
        value={newToyName}
      />
      <br />
      <input
        className="input-text"
        name="image"
        onChange={handleToyImageChange}
        placeholder="Enter a toy's image URL..."
        type="text"
        value={newToyImage}
      />
      <br />
      <input
        type="submit"
        name="submit"
        value="Create Toy"
        className="submit"
      />
    </form>
  )
}

export default ToyForm