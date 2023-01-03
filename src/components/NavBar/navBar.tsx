import Link from 'next/link'
import navBarStyles from "./navBar.module.css"

function Navigation(props: {
  selected: string, setSelected: (arg0: string) => void 
}) {

  return (
    <nav id="menu" className={navBarStyles.menu}>
      <div>
        <ul className={navBarStyles.menuUl}>
          <li>
            <Link onClick={() => {props.setSelected('gallery')}} className={`${navBarStyles.link}`} id={props.selected === "gallery" ? 'active' : ''} href="/">gallery</Link>
          </li>
          <li>
            <Link onClick={() => {props.setSelected('bio')}} id={props.selected === "bio" ? 'active' : ''}  className={`${navBarStyles.link}`} href="/bio">bio</Link>
          </li>
          <li>
            <Link onClick={() => {props.setSelected('shop')}} id={props.selected === "shop" ? 'active' : ''}  className={`${navBarStyles.link}`} href="/shop">shop</Link>
          </li>
          <li>
            <Link onClick={() => {props.setSelected('contact')}} id={props.selected === "contact" ? 'active' : ''} className={`${navBarStyles.link}`} href="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation