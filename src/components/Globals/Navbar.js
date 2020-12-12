import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [css, setCss] = useState("collapse navbar-collapse")
  const [links, setLinks] = useState([
    { id: 1, path: "/", text: "home" },
    { id: 2, path: "/about", text: "about" },
  ])

  const navbarHandler = () => {
    if (navbarOpen) {
      setNavbarOpen(false)
      setCss("collapse navbar-collapse")
    } else { 
      setNavbarOpen(true)
      setCss("collapse navbar-collapse show")
    }
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo"></img>
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={css}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
