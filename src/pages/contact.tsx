import { motion } from "framer-motion"
import Image from "next/image"
import contactStyle from "../styles/contact.module.css"

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.6,
            delay: 0.2,
            ease: "easeInOut"
          }
        }}
        className={contactStyle.gridC}
      >
        <p className={contactStyle.txt}>
          Hi, I am Guru or Garu. Thank you for visiting my site.
          <br />
          <br />
          Please contact me for any needs related to my service through email.
          <br />
          <br />I am always willing to help and I am eager to hear your
          suggestions or feedback!
          <br />
          <br />
          e-mail:{" "}
          <a
            className={contactStyle.emailLink}
            href="mailto:urugaruart@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            urugaruart@gmail.com
          </a>
        </p>
        <div className={contactStyle.email}>
          <p className={contactStyle.emailP}></p>
        </div>
        <Image
          className={contactStyle.rightBar}
          width={400}
          height={900}
          alt=""
          src=""
        />
      </motion.div>
    </>
  )
}

export default Contact
