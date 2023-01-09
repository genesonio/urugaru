import { trpc } from "../../utils/trpc"
import product from "./product.module.css"
import Image from "next/image"

const Product = () => {
  const id = localStorage.getItem("productId") ?? ""
  const { data } = trpc.print.getOne.useQuery({ id })
  if (!data?.url) return
  return (
    <>
      <div className={product.flex}>
        <Image width={270} height={382} src={data.url} alt={data.name} />
        <div>
          <h1>{data?.name}</h1>
          <p>$ {data.price?.toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}

export default Product
