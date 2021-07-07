import React from "react"

const ToyCard = ({ featuredToy, setFeaturedToy, toy }) => {
  const handleButtonClick = () => {
    setFeaturedToy(toy.name)
  }

  // const displayFeaturedToy = () => {
  //   if (featuredToy === toy.name) {
  //     return <h4>Featured Toy!!!</h4>
  //   } else {
  //     return null
  //   }
  // }
  /*
    - displayFeaturedToy function that we render instead of the h4
    - ternary operator to condionally show h4
    - use && operato to conditonally show h4
  */

  return (
    <div className={"card"}>
      <h2>{toy.name}</h2>
      { featuredToy === toy.name && <h4>Featured Toy!!!</h4> }
      <img
          alt={toy.name}
          src={toy.image}
          className={"toy-avatar"}
      />
      <p>{`${toy.likes} likes`}</p>
      <button
          className={"like-btn"}
          id={toy.id}
          onClick={handleButtonClick}
      >
        Pick me!
      </button>
    </div>
  )
}

export default ToyCard
