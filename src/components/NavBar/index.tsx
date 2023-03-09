import Link from "next/link"
import navBarStyles from "./navBar.module.css"

function Navigation(props: { selected: string }) {
  return (
    <nav id="menu" className={navBarStyles.menu}>
      <ul className={navBarStyles.menuUl}>
        <li>
          <Link
            className={`${navBarStyles.link}`}
            id={props.selected === "/" ? "active" : ""}
            href="/"
          >
            gallery
          </Link>
        </li>
        <li>
          <Link
            id={props.selected === "/b" ? "active" : ""}
            className={`${navBarStyles.link}`}
            href="/bio"
          >
            bio
          </Link>
        </li>
        <li>
          <Link
            id={props.selected === "/s" ? "active" : ""}
            className={`${navBarStyles.link}`}
            href="/shop"
          >
            shop
          </Link>
        </li>
        <li>
          <Link
            id={props.selected === "/c" ? "active" : ""}
            className={`${navBarStyles.link}`}
            href="/contact"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
