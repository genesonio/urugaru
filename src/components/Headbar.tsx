import { useEffect, useState } from "react"
import CartButton from "./CartButton"
import Logo from "./Logo"
import Navigation from "./NavBar"

const Headbar = () => {
  const [selected, setSelected] = useState("/")
  useEffect(() => {
    const page = window.location.pathname
    setSelected(page.slice(0, 2))
  })

  return (
    <>
      <Logo />
      <CartButton />
      <Navigation selected={selected} />
    </>
  )
}

export default Headbar
