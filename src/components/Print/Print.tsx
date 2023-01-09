import Image from "next/image"
import type { FunctionComponent } from "react"
import printStyle from "./print.module.css"
import { motion } from "framer-motion"

type Props = {
  name: string | null
  url: string
  price?: number
  alt: string
}

const Print: FunctionComponent<Props> = ({ name, url, price = 0, alt }) => {
  const delay = (): number => {
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
            delay: delay()
          }
        }
      }}
      initial="hidden"
      animate="visible"
      className={printStyle.card}
    >
      <Image
        width={270}
        height={382}
        className={printStyle.img}
        alt={alt}
        src={url}
      ></Image>
      <h4 className={printStyle.name}>{name}</h4>
      {price > 0 ? <p className={printStyle.price}>R$ {price}</p> : null}
    </motion.div>
  )
}

export default Print
