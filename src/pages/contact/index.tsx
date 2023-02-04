import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import contactStyle from "./contact.module.css"

const Contact = () => {
  const [showToolTip, setShowToolTip] = useState<boolean>(false)

  useEffect(() => {
    if (showToolTip) {
      const timer = setTimeout(() => {
        setShowToolTip(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [showToolTip])

  const copyToClipboard = (target: EventTarget) => {
    navigator.clipboard.writeText((target as HTMLElement).innerText)

    setShowToolTip(true)
  }

  return (
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
      <div className={contactStyle.txt}>
        <p>Hi, I am Guru or Garu. Thank you for visiting my site.</p>
        <p>
          Please contact me for any needs related to my service through email.
        </p>
        <p>
          I am always willing to help and I am eager to hear your suggestions or
          feedback!
        </p>
        <p
          onClick={({ target }) => {
            copyToClipboard(target)
          }}
          className={contactStyle.emailP}
        >
          urugaruart@gmail.com
          {showToolTip && <p className={contactStyle.toolTip}>Copied!</p>}
        </p>
      </div>
      <Image
        className={contactStyle.rightBar}
        width={400}
        height={900}
        alt=""
        src="https://urugaru.s3.sa-east-1.amazonaws.com/c986036e24b343491870c58ef0e2ab46"
      />
    </motion.div>
  )
}

export default Contact
