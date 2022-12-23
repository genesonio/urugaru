import Link from 'next/link'
import navBarStyles from "./navBar.module.css"

function Navigation() {
  return (
    <nav id="menu" className={navBarStyles.menu}>
      <div>
        <ul className={navBarStyles.menuUl}>
          <li>
            <Link className={navBarStyles.link} href="/">gallery</Link>
          </li>
          <li>
            <Link className={navBarStyles.link} href="/bio">bio</Link>
          </li>
          <li>
            <Link className={navBarStyles.link} href="/shop">shop</Link>
          </li>
          <li>
            <Link className={navBarStyles.link} href="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation