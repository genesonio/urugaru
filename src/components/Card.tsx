import { FunctionComponent } from "react"
import Image from "next/image"

interface Props {
  className: string | undefined
  alt: string
  link: string
}

const Card: FunctionComponent<Props> = ({ className, alt, link }) => {
  return <Image width={400} height={900} className={className} alt={alt} src={link} />
}

export default Card