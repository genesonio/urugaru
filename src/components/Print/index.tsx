import Image from "next/image"
import type { FunctionComponent } from "react"
import printStyle from "./print.module.css"
import { motion } from "framer-motion"

type Props = {
  name: string | null
  url: string
  price?: number
  alt: string
  showPrice: boolean
}

const Print: FunctionComponent<Props> = ({
  name,
  url,
  price,
  alt,
  showPrice
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
          placeholder="blur"
          blurDataURL={url}
          fill
          className={printStyle.img}
          alt={alt}
          src={url}
          sizes="
          (max-width: 300px) 100vw,
          (max-width: 700px) 90vw,
          (max-width: 900px) 80vw,
          (max-width: 1000px) 70vw,
          50vw
          "
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <h1 className={printStyle.name}>{name}</h1>
      {showPrice ? <p className={printStyle.price}>$ {price}</p> : null}
    </motion.div>
  )
}

export default Print
