import React, { useState } from "react"

import "./App.css"

import { toys } from "./components/toys.js"
import Header from "./components/Header.js"
import ToysList from "./components/ToysList.js"

const App = () => {
  const [ featuredToy, setFeaturedToy ] = useState("None Selected")
  const logo = "https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
  const title = "Toy Tale"

  return (
    <div className="App">
      <Header
          featuredToy={featuredToy}
          logo={logo}
          title={title}
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