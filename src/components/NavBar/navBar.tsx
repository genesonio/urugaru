import Link from "next/link"
import navBarStyles from "./navBar.module.css"

function Navigation(props: { selected: string }) {
  return (
    <nav id="menu" className={navBarStyles.menu}>
      <ul className={navBarStyles.menuUl}>
        <Link
          className={`${navBarStyles.link}`}
          id={props.selected === "/" ? "active" : ""}
          href="/"
        >
          gallery
        </Link>
        <Link
          id={props.selected === "/bio" ? "active" : ""}
          className={`${navBarStyles.link}`}
          href="/bio"
        >
          bio
        </Link>
        <Link
          style={{ pointerEvents: "none" }}
          id={props.selected === "/shop" ? "active" : ""}
          className={`${navBarStyles.link}`}
          href="/shop"
        >
          shop
        </Link>
        <Link
          id={props.selected === "/contact" ? "active" : ""}
          className={`${navBarStyles.link}`}
          href="/contact"
        >
          contact
        </Link>
      </ul>
    </nav>
  )
}

export default Navigation
