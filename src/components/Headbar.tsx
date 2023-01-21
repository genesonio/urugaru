import { useEffect, useState } from "react"
import Logo from "./Logo/logo"
import Navigation from "./NavBar/navBar"

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
