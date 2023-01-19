import Link from "next/link"
import logoStyle from "./logo.module.css"

const Logo = () => {
  return (
    <h1 id="Logo" className={logoStyle.logo}>
      <Link className={logoStyle.link} href="/">
        uruGaru
      </Link>
    </h1>
  )
}

export default Logo
