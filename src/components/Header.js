import React from "react"

const Header = ({ logo, title }) => (
  <div id="toy-header">
    <img
      src={logo}
      alt="toy-header"
    />
    <h1>{title}</h1>
  </div>
)

export default Header
