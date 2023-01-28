import Image from "next/image"
import type { FunctionComponent } from "react"
import printStyle from "./print.module.css"
import { motion } from "framer-motion"

type Props = {
  name: string | null
  url: string
  price?: number
  alt: string
  isAvailable?: boolean
}

const Print: FunctionComponent<Props> = ({
  name,
  url,
  price = 0,
  alt,
  isAvailable
}) => {
  const duration = (): number => {
    return Math.random() * 0.4 + 0.1
  }
  return (
    <motion.div
      variants={{
        hidden: {
          scale: 1,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.2,
            duration: duration(),
            ease: "easeInOut"
          }
        }
      }}
      initial="hidden"
      animate="visible"
      className={printStyle.card}
    >
      <div className={printStyle.container}>
        <Image
          fill
          className={printStyle.img}
          alt={alt}
          src={url}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <h4 className={printStyle.name}>{name}</h4>
      {isAvailable ? <p className={printStyle.price}>R$ {price}</p> : null}
    </motion.div>
  )
}

export default Print
