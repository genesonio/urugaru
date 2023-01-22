import { useEffect, useState } from "react"
import Logo from "./Logo/logo"
import Navigation from "./NavBar/navBar"
import Head from "next/head"

const Headbar = () => {
  const [selected, setSelected] = useState("/")
  useEffect(() => {
    const page = window.location.pathname
    setSelected(page)
    console.log(page)
  })

  return (
    <>
      <Head>
        <title>uruGaru</title>
      </Head>
      <Logo />
      <Navigation selected={selected} />
    </>
  )
}

export default Headbar
