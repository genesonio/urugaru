import Image from 'next/image'
import Link from 'next/link'
import footerStyle from './footer.module.css'

const Footer = () => {
  return (
    <>
    <div className={footerStyle.fineLine}></div>
    <footer className={footerStyle.footer}>
      <Link className={footerStyle.instagram} target="_blank" href="https://www.instagram.com/urugaru_">
        <Image height={18} width={18} alt="Instagram logo" src="/instagram.svg" />
      </Link>
      <a href='https://github.com/genesonio' rel="noreferrer" target="_blank" className={footerStyle.copy}>&#169; Genésio Da Silva Pacheco 2022</a>
    </footer>
    </>
  )
}

export default Footer