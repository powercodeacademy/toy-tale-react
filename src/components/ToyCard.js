import React from "react"

const ToyCard = ({ toy }) => (
  <div className={"card"}>
    <h2>{toy.name}</h2>
    <img
        alt={toy.name}
        src={toy.image}
        className={"toy-avatar"}
    />
    <p>{`${toy.likes} likes`}</p>
    <button
        className={"like-btn"}
        id={toy.id}
        onClick={() => alert(`${toy.name} was clicked!`)}
    >
      like
    </button>
  </div>
)

export default ToyCard
