import Image from 'next/image'
import { FunctionComponent } from 'react'
import printStyle from './print.module.css'

type Props = {
  url: string
  price?: string | 0
  alt: string
}

const Print: FunctionComponent<Props> = ({ url, price = 0, alt }) => {
  return (
    <div className={printStyle.card}>
      <Image width={270} height={382} className={printStyle.img} alt={alt} src={url}></Image>
      {price > 0 ? <p className={printStyle.price}>R$ {price}</p> : null}
    </div>
  )
}

export default Print
