import React from "react"

const Header = ({ featuredToy, logo, title }) => (
  <div className={"colorfulBackground"}>
    <div id="toy-header">
      <img
        src={logo}
        alt="toy-header"
      />
    </div>
    <h1>{title}</h1>
    <h1>Featured Toy: {featuredToy}</h1>
  </div>
)

export default Header
