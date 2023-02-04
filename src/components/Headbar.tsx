import { useEffect, useState } from "react"
import Logo from "./Logo"
import Navigation from "./NavBar"

const Headbar = () => {
  const [selected, setSelected] = useState("/")
  useEffect(() => {
    const page = window.location.pathname
    setSelected(page)
  })

  return (
    <>
      <Logo />
      <Navigation selected={selected} />
    </>
  )
}

export default Headbar
