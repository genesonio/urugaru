import type { FunctionComponent } from "react"
import Image from "next/image"

interface Props {
  className: string | undefined
  alt: string
  link: string
}

const Card: FunctionComponent<Props> = ({ className, alt, link }) => {
  return (
    <Image
      layout="responsive"
      width={400}
      height={900}
      className={className}
      alt={alt}
      src={link}
      sizes="(min-width: 800) 200"
    />
  )
}

export default Card
