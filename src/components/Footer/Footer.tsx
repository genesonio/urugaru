import Image from "next/image"
import Link from "next/link"
import footerStyle from "./footer.module.css"

const Footer = () => {
  const date = new Date()
  const text = `© uruGaru ${date.getFullYear()}`
  return (
    <>
      <footer className={footerStyle.footer}>
        <div className={footerStyle.links}>
          <Link
            className={footerStyle.instagram}
            target="_blank"
            href="https://www.instagram.com/urugaru_"
          >
            <Image
              height={18}
              width={18}
              alt="Instagram logo"
              src="/instagram.svg"
            />
          </Link>
          <Link
            href="https://github.com/genesonio"
            target="_blank"
            className={footerStyle.copy}
          >
            {text}
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
