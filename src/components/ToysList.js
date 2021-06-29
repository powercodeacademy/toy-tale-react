import React from "react"

import ToyCard from "./ToyCard"
import { toys } from "./toys.js"

const ToysList = () => (
  <div id="toy-collection">
    {
      toys.map(toy => (
        <ToyCard
           id={toy.id}
           key={toy.id}
           image={toy.image}
           likes={toy.likes}
           name={toy.name}
        />
      ))
    }
  </div>
)

export default ToysList