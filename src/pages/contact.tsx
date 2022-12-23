import Card from "../components/Card";
import contactStyle from "../styles/contact.module.css"

const Contact = () => {
  return (
<div className={contactStyle.gridC}>
      <p className={contactStyle.txt}>
        Nisi aute aute pariatur minim proident id cillum commodo dolore elit
        nisi occaecat id. Anim culpa minim in proident aliqua pariatur ut irure
        esse laborum velit ad. Dolore dolor aliqua commodo consectetur ex do id
        veniam tempor nisi. Eu irure voluptate laboris cupidatat incididunt
        veniam aliquip adipisicing tempor. Incididunt excepteur quis duis sit ad
        incididunt consequat. Incididunt ea Lorem exercitation est et. In sint
        fugiat velit voluptate cupidatat eiusmod.
      </p>
      <div className={contactStyle.email}>
        <p className={contactStyle.emailP}>e-mail:</p>
        <a
          className={contactStyle.emailLink}
          href="mailto:exemplo@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          email@example.com
        </a>
      </div>
      <Card className={contactStyle.rightBar} alt="" link="https://picsum.photos/401/801" />
    </div>
  )
}

export default Contact