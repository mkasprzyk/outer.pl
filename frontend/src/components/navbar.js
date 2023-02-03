import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <header className="bg-neutral-50">
      <nav className="container flex flex-row items-baseline justify-between py-6">
        <div className="flex flex-row space-x-4 items-baseline justify-end">
          <Link className="font-medium" to="/" >
            Stories
          </Link>
          <Link className="font-medium" to="/gear">
            Gear
          </Link>
          <Link className="font-medium" to="/about">
            About
          </Link>
        </div>
      </nav>
    </header>
    )
  }
  
  export default Navbar