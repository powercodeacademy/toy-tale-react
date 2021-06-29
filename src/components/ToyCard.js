import React from "react"

const ToyCard = ({ id, image, likes, name }) => (
  <div className={"card"}>
    <h2>{name}</h2>
    <img
        alt={`${name} avatar!`}
        className={"toy-avatar"}
        src={image}
    />
    <p>{`${likes} likes`}</p>
    <button
        className={"like-btn"}
        id={id}
        onClick={alert}
    >
      like
    </button>
  </div>
)

export default ToyCard