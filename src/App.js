import React, { useState } from "react"

import "./App.css"

import { initialToys } from "./components/toys.js"
import Header from "./components/Header.js"
import ToysList from "./components/ToysList.js"
import ToyForm from "./components/ToyForm.js"

const App = () => {
  const [ featuredToy, setFeaturedToy ] = useState("None Selected")
  const [ toys, setToys ] = useState(initialToys)

  const logo = "https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
  const title = "Toy Tale"

  const handleToyFormSubmit = (newToy) => {
    console.log("APP knows that Toy Form submitted")
    console.log("APP know the whole toy", newToy)
    setToys([...toys, newToy])
  }

  return (
    <div className="App">
      <Header
          featuredToy={featuredToy}
          logo={logo}
          title={title}
      />
      <ToyForm
          onToyFormSubmit={handleToyFormSubmit}
      />
      <ToysList
          featuredToy={featuredToy}
          listOfToys={toys}
          setFeaturedToy={setFeaturedToy}
      />
    </div>
  )
}

export default App