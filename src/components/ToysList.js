import React from "react"

import ToyCard from "./ToyCard"

const ToysList = ({ listOfToys }) => (
  <div id="toy-collection">
    {
      listOfToys.map(toy => (
        <ToyCard
            key={toy.id}
            toyyyyys={toy}
        />
      ))
    }
  </div>
)

export default ToysList