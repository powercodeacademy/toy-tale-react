import React from "react"

import ToyCard from "./ToyCard"

const ToysList = ({ featuredToy, listOfToys, setFeaturedToy }) => (
  <div id="toy-collection">
    {
      listOfToys.map(toy => (
        <ToyCard
            featuredToy={featuredToy}
            key={toy.id}
            setFeaturedToy={setFeaturedToy}
            toy={toy}
        />
      ))
    }
  </div>
)

export default ToysList