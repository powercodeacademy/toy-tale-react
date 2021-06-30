import React from "react"

const ToyCard = ({ toyyyyys }) => (
  <div className={"card"}>
    <h2>{toyyyyys.name}</h2>
    <img
        alt={toyyyyys.name}
        src={toyyyyys.image}
        className={"toy-avatar"}
    />
    <p>{`${toyyyyys.likes} likes`}</p>
    <button
        className={"like-btn"}
        id={toyyyyys.id}
        onClick={() => alert(`${toyyyyys.name} was clicked!`)}
    >
      like
    </button>
  </div>
)

export default ToyCard
