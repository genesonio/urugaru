import { useState } from "react";
import Logo from "./Logo/logo";
import Navigation from "./NavBar/navBar";

const Headbar = () => {
  const [ selected, setSelected ] = useState('gallery')

  return (
    <>
      <Logo setSelected={setSelected} />
      <Navigation selected={selected} setSelected={setSelected} />
    </>
  )
}

export default Headbar