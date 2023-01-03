import Link from "next/link"
import logoStyle from "./logo.module.css"

const Logo = (props: { setSelected: (arg0: string) => void }) => {
  return (
    <h1 id="Logo" className={logoStyle.logo}>
      <Link className={logoStyle.link} onClick={() => {props.setSelected("gallery")}} href="/">
        uruGaru
      </Link>
    </h1>
  )
}

export default Logo