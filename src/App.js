import "./App.css"

import { toys } from "./components/toys.js"
import Header from "./components/Header.js"
import ToysList from "./components/ToysList.js"

const App = () => {
  const logo = "https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
  const title = "Toy Tale"
  const listOfToys = toys

  return (
    <div className="App">
      <Header
          logo={logo}
          title={title}
      />
      <ToysList listOfToys={listOfToys} />
    </div>
  )
}

export default App